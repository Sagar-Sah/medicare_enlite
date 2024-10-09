import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto'; // Ensure you have Chart.js installed
import analyticsDataJson from './analyticsData.json'; // Adjust the path as necessary
import './style.css';

const BotAnalytics = () => {
  const [topQueries, setTopQueries] = useState([]);
  const performanceChartRef = useRef(null); // Create a ref for the canvas

  // Function to draw performance chart using Chart.js
  const drawPerformanceChart = (data) => {
    const ctx = performanceChartRef.current.getContext('2d'); // Use ref to get context
    const performanceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Performance Score',
          data: data.scores,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Score (%)',
            },
          },
        },
      },
    });

    // Return the chart instance if needed
    return performanceChart;
  };

  useEffect(() => {
    // Load data from JSON (simulating an API call)
    setTopQueries(analyticsDataJson.topQueries);

    // Only draw the chart if performance data is available
    if (analyticsDataJson.performanceData) {
      drawPerformanceChart(analyticsDataJson.performanceData);
    }
  }, []);

  return (
    <section className="analytics">
      <header>
        <h1>Bot Analytics</h1>
      </header>
      <div className="analytics-container">
        <h3>Performance Overview</h3>
        <canvas ref={performanceChartRef}></canvas> {/* Attach ref here */}
        <h3>Top User Queries</h3>
        <ul className="top-queries">
          {topQueries.map((query, index) => (
            <li key={index}>"{query}"</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BotAnalytics;
