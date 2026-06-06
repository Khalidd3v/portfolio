import Reveal from '../components/Reveal';
import Hero from '../components/Hero';
import GitHubActivity from '../components/GitHubActivity';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Reveal><GitHubActivity /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Contact /></Reveal>
    </>
  );
};

export default HomePage;
