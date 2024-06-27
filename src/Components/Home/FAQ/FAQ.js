import React, { useState } from 'react';
import './FAQ.css';
import faqData from './faqData';

function FAQ() {
 // State to track which questions are expanded
 const [expandedQuestions, setExpandedQuestions] = useState([]);

 // Function to toggle the visibility of answers for a specific question
 const toggleAnswer = (index) => {
   if (expandedQuestions.includes(index)) {
     setExpandedQuestions(expandedQuestions.filter((i) => i !== index));
   } else {
     setExpandedQuestions([...expandedQuestions, index]);
   }
 };


  return (
    <div>
      <div className="faq-container">
        <div>
        <div className="faq-title">
        <h3>Business Waste & Recycling FAQs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
           {faqData.map((item, index) => (
        <div key={item.id} className={`faq-inner-div ${expandedQuestions.includes(index) ? 'active-question' : ''}`}>
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <h2>{item.question}</h2>
            <span className={`arrow ${expandedQuestions.includes(index) ? 'up' : 'down'}`}></span>
          </div>
          {expandedQuestions.includes(index) && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    <div className='faq-right'>
        <img src='./FAQ.svg' alt='leader-image' height={"525px"} width={"90%"}></img>
      </div>
    </div>
    </div>
  );
}

export default FAQ;