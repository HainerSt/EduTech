import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { useState } from "react";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="Offers:" />
        <Programs />
        <Title subTitle="Our Mission" />
        <About setPlayState={setPlayState} />
        <Title subTitle="TESTIMONIALS" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Our Services Await You" />
        <Contact />
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
