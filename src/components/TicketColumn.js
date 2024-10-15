import React from 'react';
import Ticket from './Ticket';

const TicketColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-board">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketColumn;
