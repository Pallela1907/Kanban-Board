import React from 'react';


const Ticket = ({ ticket }) => {
  return (
    <div className={`ticket priority-${ticket.priority}`}>
      <p>{ticket.id}</p>
      <h3>{ticket.title}</h3>
      <p>Feature Request</p>
    </div>
  );
};

export default Ticket;
