import { useState } from "react";
import Background from "./component/background/Background";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your desire" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <Navbar />
    </div>
  );
};

export default App;
