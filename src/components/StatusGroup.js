import React from 'react';

const StatusGroup = ({ tickets }) => {
  return (
    <div className="kanban-board">
      {Object.keys(tickets).map((status) => (
        <div key={status} className="kanban-column">
          <div className='one_line_pad'>
          <img src={`./${status}.svg`} alt="priority symbol" />
          <h3>{status}</h3>
          <img src={`./3 dot menu.svg`} alt=""/>
          <img src={`./add.svg`} alt=""/>
          </div>
          {tickets[status].map((ticket) => (
            <div key={ticket.id} className={`ticket priority-${ticket.priority}`}>
              <p>{ticket.id}</p>
              <div className='one_line'>
               <img src={`./${status}.svg`} alt="priority symbol" />
              <h3>{ticket.title}</h3>
              </div>
              
              <div className='one_line'>
                 <img src={`./${ticket.priority}.svg`} alt=""/>
                <p>{ticket.tag.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StatusGroup;
