import { useState, useRef, useEffect } from 'react';
import './arena.scss';

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
    e.stopPropagation(); // Prevent event bubbling to parent article
    const newStep = isPrev ? step - 1 : step + 1;
    if (newStep >= 1 && newStep <= 16) {
      setActiveStep(newStep);
      articleRefs.current[newStep - 1]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  const renderArticle = (step, isLastStep, color) => {
    return (
      <article
        data-step={step}
        ref={(el) => (articleRefs.current[step - 1] = el)}
        className={activeStep === step ? 'active' : ''}
        onClick={() => setActiveStep(step)}
      >
        <header className={`d-flex align-items-center text-${color} bg-${color} bg-opacity-10`}>
          <i className={`fa-solid fa-meteor bg-${color}`} />
          <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
        </header>
        <div className="body">
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </small>
          <div className="d-flex justify-content-between mt-3 controls">
            <button
              className={`btn btn-outline-${color} ${step === 1 ? 'invisible' : ''}`}
              onClick={(e) => handlePrevNext(e, true, step)}  // Updated handler
            >
              Prev
            </button>
            <button
              className={`btn btn-outline-${color} ${isLastStep ? 'invisible' : ''}`}
              onClick={(e) => handlePrevNext(e, false, step)}  // Updated handler
            >
              Next
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="arena d-flex flex-column align-items-center py-5">
      <section className="text-danger">
        <div className="circle-wrapper">
          <div className="circle">
            <i className="fa-solid fa-meteor display-1 mb-3" />
            <h4>STEP 1</h4>Ready for this?
          </div>
        </div>
        <div className="content">
          {renderArticle(1, false, 'danger')}
          {renderArticle(2, false, 'danger')}
          {renderArticle(3, false, 'danger')}
          {renderArticle(4, false, 'danger')}
          {renderArticle(5, false, 'danger')}
        </div>
      </section>

      <section className="text-warning">
        <div className="circle-wrapper">
          <div className="circle">
            <i className="fa-solid fa-cookie-bite display-1 mb-3" />
            <h4>STEP 2</h4>You're doing great!
          </div>
        </div>
        <div className="content">
          {renderArticle(6, false, 'warning')}
          {renderArticle(7, false, 'warning')}
          {renderArticle(8, false, 'warning')}
          {renderArticle(9, false, 'warning')}
          {renderArticle(10, false, 'warning')}
        </div>
      </section>

      <section className="text-success">
        <div className="circle-wrapper">
          <div className="circle">
            <i className="fa-solid fa-ghost display-1 mb-3" />
            <h4>STEP 3</h4>Almost There!
          </div>
        </div>
        <div className="content">
          {renderArticle(11, false, 'success')}
          {renderArticle(12, false, 'success')}
          {renderArticle(13, false, 'success')}
          {renderArticle(14, false, 'success')}
          {renderArticle(15, false, 'success')}
          {renderArticle(16, true, 'success')}
        </div>
      </section>
    </div>
  );
}
