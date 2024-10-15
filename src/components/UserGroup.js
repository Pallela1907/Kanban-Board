// import React from 'react';


// const UserGroup = ({ tickets }) => {
//   return (
//     <div className="kanban-board">
//       {Object.keys(tickets).map((userId) => (
//         <div key={userId} className="kanban-column">
//           <h3>{userId}</h3>
//           {tickets[userId].map((ticket) => (
//             <div key={ticket.id} className={`ticket priority-${ticket.priority}`}>
//               <p>{ticket.id}</p>
//               <h3>{ticket.title}</h3>
//               <p>{ticket.tag.join(', ')}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserGroup;


import React from 'react';

const UserGroup = ({ tickets, users }) => {
  // Create a map of userId to user name for easy lookup
  const userMap = users.reduce((map, user) => {
    map[user.id] = user.name; // Adjust according to your user data structure
    return map;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(tickets).map((userId) => (
        <div key={userId} className="konban-column">
          <div className='one_line_pad'>
          <h2>{userMap[userId] || 'Unknown User'}</h2> {/* Display user name */}
          <img src={`./3 dot menu.svg`} alt=""/>
          <img src={`./add.svg`} alt=""/>
          </div>
          {tickets[userId].map((ticket) => (
            <div key={ticket.id} className={`ticket priority-${ticket.priority}`}>
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

export default UserGroup;