import React from 'react';

const Legend = () => {
  return (
    <div className="legend-container">
      <h4>Priority Legend</h4>
      <div className="legend-item">
        <div className="priority-box priority-0"></div>
        <span>No Urgency (Priority Level 0)</span>
      </div>
      <div className="legend-item">
        <div className="priority-box priority-1"></div>
        <span>Very Less Urgency (Priority Level 1)</span>
      </div>
      <div className="legend-item">
        <div className="priority-box priority-2"></div>
        <span>Less Urgency (Priority Level 2)</span>
      </div>
      <div className="legend-item">
        <div className="priority-box priority-3"></div>
        <span>Urgent (Priority Level 3)</span>
      </div>
      <div className="legend-item">
        <div className="priority-box priority-4"></div>
        <span>Very Urgent (Priority Level 4)</span>
      </div>
    </div>
  );
};

export default Legend;
