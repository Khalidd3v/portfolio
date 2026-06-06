import { useState, useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { HiStar, HiCode, HiCollection } from 'react-icons/hi';
import './GitHubActivity.css';

const GITHUB_USER = 'khalidd3v';
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

const GREEN_COLORS = [
  'rgba(255,255,255,0.04)',
  '#0e4429',
  '#006d32',
  '#26a641',
  '#39d353',
];

const CELL = 11;
const GAP = 3;
const CELL_TOTAL = CELL + GAP;
const LABEL_WIDTH = 36;
const HEADER_HEIGHT = 20;

async function fetchUser() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

async function fetchRepos() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
  if (!res.ok) throw new Error('Failed to fetch repos');
  return res.json();
}

async function fetchContributions() {
  const res = await fetch(`https://github-contributions-api.deno.dev/${GITHUB_USER}.json`);
  if (!res.ok) throw new Error('Failed to fetch contributions');
  return res.json();
}

const GitHubActivity = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ repos: 0, stars: 0 });
  const [weeks, setWeeks] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userData, reposData, contribData] = await Promise.all([
          fetchUser(),
          fetchRepos(),
          fetchContributions(),
        ]);

        if (cancelled) return;

        const stars = reposData.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        setUser(userData);
        setStats({ repos: reposData.length, stars });

        const rawWeeks = contribData.contributions || [];
        const levelMap = {
          NONE: 0,
          FIRST_QUARTILE: 1,
          SECOND_QUARTILE: 2,
          THIRD_QUARTILE: 3,
          FOURTH_QUARTILE: 4,
        };

        let total = 0;
        const contribWeeks = rawWeeks.map((week) =>
          week.map((day) => {
            total += day.contributionCount || 0;
            return {
              level: levelMap[day.contributionLevel] || 0,
              count: day.contributionCount || 0,
              date: day.date || '',
            };
          })
        );

        while (contribWeeks.length < 53) {
          contribWeeks.push(Array.from({ length: 7 }, () => ({ level: 0, count: 0, date: '' })));
        }

        setWeeks(contribWeeks);
        setTotalContributions(total);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  const svgWidth = LABEL_WIDTH + (weeks.length || 53) * CELL_TOTAL + GAP;
  const svgHeight = HEADER_HEIGHT + 7 * CELL_TOTAL + GAP;

  if (error) {
    return (
      <section className="github-activity">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              GitHub <span className="gradient-text">Activity</span>
            </h2>
            <p className="section-subtitle">
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <SiGithub /> View on GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="github-activity">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle">
            {loading
              ? 'Loading live data...'
              : `${(totalContributions || 0).toLocaleString()} contributions in the last year`}
          </p>
        </div>

        <div className="github-card card">
          <div className="github-stats">
            <div className="github-stat">
              <HiCode className="github-stat-icon" />
              <span className="github-stat-value">
                {loading ? '-' : stats.repos}
              </span>
              <span className="github-stat-label mono">Repositories</span>
            </div>
            <div className="github-stat">
              <HiStar className="github-stat-icon" />
              <span className="github-stat-value">
                {loading ? '-' : stats.stars}
              </span>
              <span className="github-stat-label mono">Total Stars</span>
            </div>
            <div className="github-stat">
              <HiCollection className="github-stat-icon" />
              <span className="github-stat-value">
                {loading ? '-' : user?.followers ?? '-'}
              </span>
              <span className="github-stat-label mono">Followers</span>
            </div>
          </div>

          {loading ? (
            <div className="heatmap-loading">
              <div className="heatmap-skeleton">
                {Array.from({ length: 7 }).map((_, row) => (
                  <div key={row} className="heatmap-skeleton-row">
                    {Array.from({ length: 52 }).map((__, col) => (
                      <div key={col} className="heatmap-skeleton-cell" />
                    ))}
                  </div>
                ))}
              </div>
              <span className="mono" style={{ marginTop: '0.75rem', display: 'block' }}>
                Loading contribution graph...
              </span>
            </div>
          ) : (
            <>
              <div className="heatmap-wrapper">
                <svg
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  className="heatmap-svg"
                  role="img"
                >
                  {MONTHS.map((month, i) => {
                    const x = LABEL_WIDTH + (i * (weeks.length || 53) * CELL_TOTAL) / 12;
                    return (
                      <text key={month} x={x} y={12} className="heatmap-label mono">
                        {month}
                      </text>
                    );
                  })}

                  {DAYS.map((day, i) => (
                    <text
                      key={i}
                      x={0}
                      y={HEADER_HEIGHT + i * CELL_TOTAL + CELL * 0.75}
                      className="heatmap-label mono"
                    >
                      {day}
                    </text>
                  ))}

                  {weeks.map((week, wi) =>
                    week.map((cell, di) => (
                      <rect
                        key={`${wi}-${di}`}
                        x={LABEL_WIDTH + wi * CELL_TOTAL}
                        y={HEADER_HEIGHT + di * CELL_TOTAL}
                        width={CELL}
                        height={CELL}
                        rx={2}
                        fill={GREEN_COLORS[cell.level]}
                      >
                        <title>
                        {cell.count} contributions
                        {cell.date ? ` on ${cell.date}` : ''}
                      </title>
                      </rect>
                    ))
                  )}
                </svg>
              </div>

              <div className="heatmap-legend">
                <span className="mono">Less</span>
                {GREEN_COLORS.map((color, i) => (
                  <div key={i} className="legend-cell" style={{ backgroundColor: color }} />
                ))}
                <span className="mono">More</span>
              </div>
            </>
          )}

          <div className="github-cta">
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <SiGithub /> View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
