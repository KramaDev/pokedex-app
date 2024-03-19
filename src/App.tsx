import { useState } from "react";
import Button from "./components/button";
import Layout from "./components/layout";
import Pokedex from "./components/pokedex";
import Header from "./components/header";

const App = () => {
  const [nextClickCount, setNextClickCount] = useState<number>(0);

  const handleNextClick = () => {
    setNextClickCount(nextClickCount + 1);
  };

  const handlePrevClick = () => {
    if (nextClickCount === 0) {
      setNextClickCount(150); // PREDPOSTAVKA DA RADIMO SAM 1ST GEN POKEMONE
    } else {
      setNextClickCount(nextClickCount - 1);
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <Pokedex nextClickCount={nextClickCount} />
        <div>
          <Button text="Previous" onClick={handlePrevClick} />
          <Button text="Next" onClick={handleNextClick} />
        </div>
      </Layout>
    </>
  );
};

export default App;
