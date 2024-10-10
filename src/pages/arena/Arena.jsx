import './arena.scss';
import { useState, useRef, useEffect } from 'react';
import Header from '../../components/header/Header';

export default function Money() {
  const [activeStep, setActiveStep] = useState(0);
  const articleRefs = useRef([]);

  useEffect(() => {
    const handleMouseUp = (e) => {
      const activeArticle = articleRefs.current[activeStep - 1];
      if (activeArticle && !activeArticle.contains(e.target)) {
        setActiveStep(null);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [activeStep]);

  const handlePrevNext = (e, isPrev, step) => {
    e.stopPropagation();
    const newStep = isPrev ? step - 1 : step + 1;
    if (newStep >= 1 && newStep <= 16) {
      setActiveStep(newStep);
      articleRefs.current[newStep - 1]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  const renderArticle = (step, isLastStep) => {
    return (
      <article data-step={step} ref={(el) => (articleRefs.current[step - 1] = el)} className={activeStep === step ? 'active' : ''} onClick={() => setActiveStep(step)} >
        <header>
          <i className="fa-solid fa-meteor" />
          <h6 className="text-uppercase my-3 ps-4">Step {step}</h6>
        </header>
        <div className="body">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className="d-flex justify-content-between mt-3 controls">
            <button className={`btn ${step === 1 ? 'invisible' : ''}`} onClick={(e) => handlePrevNext(e, true, step)} > Prev </button>
            <button className={`btn ${isLastStep ? 'invisible' : ''}`} onClick={(e) => handlePrevNext(e, false, step)} > Next </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="arena-page">
      <Header />
      <section >
        <div className="content">
          {renderArticle(1, false)}
          {renderArticle(2, false)}
          {renderArticle(3, false)}
          {renderArticle(4, false)}
          {renderArticle(5, false)}
          {renderArticle(6, false)}
          {renderArticle(7, false)}
          {renderArticle(8, false)}
          {renderArticle(9, false)}
          {renderArticle(10, false)}
          {renderArticle(11, false)}
          {renderArticle(12, true)}
        </div>
      </section>
    </div>
  );
}
