import Hero from '../components/Hero';
import GitHubActivity from '../components/GitHubActivity';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <GitHubActivity />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
