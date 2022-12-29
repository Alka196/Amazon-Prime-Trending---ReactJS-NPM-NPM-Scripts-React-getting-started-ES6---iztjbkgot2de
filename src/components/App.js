import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (slides) => {
  const totalPage = slides.slides.length;

  const [pageNo, setPageNo] = useState(0);
  const [currSlide, setCurrSlide] = useState(slides.slides[pageNo]);

  const handlePrev = () => {
    setPageNo(pageNo - 1);
    setCurrSlide(slides.slides[pageNo - 1]);
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
    setCurrSlide(slides.slides[pageNo + 1]);
  };
  const handleRestart = () => {
    setPageNo(0);
    setCurrSlide(slides.slides[0]);
  };

  return (
    <>
      <div>
        <h1 data-testid="title">{currSlide.title}</h1>
        <p data-testid="text">{currSlide.text}</p>
        <button
          type="button"
          disabled={pageNo <= 0}
          data-testid="button-prev"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          type="button"
          disabled={pageNo <= 0}
          data-testid="button-restart"
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          type="button"
          disabled={totalPage === pageNo + 1}
          data-testid="button-next"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;
