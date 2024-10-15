import "./App.css";
import React, { useState, useEffect } from 'react';
import Legend from './components/Legend';
import KanbanBoard from './components/KanbanBoard'; 

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(() => {
    return localStorage.getItem('groupBy') || 'status';
  });
  const [sortBy, setSortBy] = useState(() => {
 
    return localStorage.getItem('sortBy') || 'title';
  });
  const [showDisplayOptions, setShowDisplayOptions] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const groupTickets = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      let groupKey;

      switch (groupBy) {
        case 'status':
          groupKey = ticket.status;
          break;
        case 'user':
          groupKey = ticket.userId;
          break;
        case 'priority':
          groupKey = ticket.priority; 
          break;
        default:
          groupKey = 'Others';
      }

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(ticket);
      return groups;
    }, {});
  };


  const sortTickets = (tickets) => {
    const sortedTickets = [...tickets];
    sortedTickets.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'priority') {
        return b.priority - a.priority; 
      }
      return 0;
    });
    return sortedTickets;
  };

  
  const groupedTickets = groupTickets(sortTickets(tickets));


  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
    localStorage.setItem('groupBy', e.target.value); 
    setShowDisplayOptions(false); 
  };

  
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    localStorage.setItem('sortBy', e.target.value); 
    setShowDisplayOptions(false); 
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <Legend />


      <div className="display-options">
        <button 
          className="display-button" 
          onClick={() => setShowDisplayOptions(prev => !prev)} 
        >
          <img src="./Display.svg" alt="" />
          Display
          <img src="./down.svg" alt="" />
        </button>
        {showDisplayOptions && (
          <div className="dropdown">
            <div>
              <label htmlFor="groupBy">Group By:</label>
              <select
                id="groupBy"
                value={groupBy}
                onChange={handleGroupByChange} 
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div>
              <label htmlFor="sortBy">Sort By:</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={handleSortByChange} 
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <KanbanBoard tickets={groupedTickets} users={users} groupBy={groupBy}  sortBy={sortBy}/>
    </div>
  );
};

export default App;
