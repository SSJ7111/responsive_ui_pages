import React, { useEffect, useState } from "react";

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetch('/faqData.json')
      .then(response => response.json())
      .then(data => setFaqData(data))
      .catch(error => console.error('Error fetching FAQ data:', error));
  }, []);

  return (
    <div className="container bg-black p-3">
      <h3 className="text-left faq-title py-4 mb-3">Frequently Asked Questions</h3>
      <hr className="border-light" />
      <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item bg-black border-0" data-bs-theme="dark">
            <h2 className="accordion-header" id={`panelsStayOpen-heading${index}`}>
              <button
                className={`accordion-button ${index === 0 ? "" : "collapsed"} bg-black text-white border-0`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`panelsStayOpen-collapse${index}`}
                style={{ boxShadow: "none", outline: "none" }}
              >
                <p className="faq-sub-title">{item.question}</p>
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`panelsStayOpen-heading${index}`}
            >
              <div className="accordion-body faq-text border-0">
                {item.answer}
              </div>
            </div>
            <hr className="border-light" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
