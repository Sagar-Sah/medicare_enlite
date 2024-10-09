import React, { useState } from 'react';
import feedbackData from './feedbackData.json'; // Import JSON data
import './style.css';

const UserFeedback = () => {
  const [showAllFeedback, setShowAllFeedback] = useState(false);

  const handleViewAllFeedback = () => {
    setShowAllFeedback(!showAllFeedback);
  };

  return (
    <section className="feedback">
      <header>
        <h1>User Feedback</h1>
      </header>
      <div className="feedback-container">
        <h3>Recent Feedback</h3>
        <ul className="feedback-list">
          {feedbackData.recentFeedback.map((feedback, index) => (
            <li key={index}>"{feedback.text}" - {feedback.user}</li>
          ))}
        </ul>

        {showAllFeedback && (
          <ul className="feedback-list">
            {feedbackData.allFeedback.map((feedback, index) => (
              <li key={index}>"{feedback.text}" - {feedback.user}</li>
            ))}
          </ul>
        )}

        <button onClick={handleViewAllFeedback}>
          {showAllFeedback ? 'Hide Feedback' : 'View All Feedback'}
        </button>
      </div>
    </section>
  );
};

export default UserFeedback;
