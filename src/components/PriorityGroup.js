import React from 'react';

const PriorityGroup = ({ tickets, sortBy }) => {
  const priorityKeys = Object.keys(tickets);
  const sortedPriorities = sortBy === 'priority'
    ? priorityKeys.map(Number).sort((a, b) => b - a) 
    : priorityKeys; 

  return (
    <div className="kanban-board">
      {sortedPriorities.map((priority) => (
        <div key={priority}>
          <div className = 'one_line_pad'>
          <img src={`./${priority}.svg`} alt=""/>
          <h3>{`Priority Level ${priority}`}</h3>
          <img src={`./3 dot menu.svg`} alt=""/>
          <img src={`./add.svg`} alt=""/>
          </div>
          {tickets[priority].map((ticket) => (
            <div key={ticket.id} className="ticket kanban-column">
              <p>{ticket.id}</p>
              <div className='one_line'>
              <img src={`./${ticket.status}.svg`} alt="priority symbol" />
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

export default PriorityGroup;
