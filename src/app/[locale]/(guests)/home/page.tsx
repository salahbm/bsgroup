import { Brands } from '@/components/_home/brands';
import Feature from '@/components/_home/Features';
import FunFact from '@/components/_home/FunFact';
import Hero from '@/components/_home/hero';
import PeopleMarquee from '@/components/_home/marquee';
import { Process } from '@/components/_home/process';
import Blog from '@/components/Blog';

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Process />
      <Brands />
      <PeopleMarquee />
      <FunFact />
      <Blog />
    </>
  );
};

export default Home;
