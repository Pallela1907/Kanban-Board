import React from 'react';
import StatusGroup from './StatusGroup';
import UserGroup from './UserGroup';
import PriorityGroup from './PriorityGroup';


const KanbanBoard = ({ tickets,users, groupBy ,sortBy}) => {
  if (groupBy === 'status') {
    return <StatusGroup className='kanban-board' tickets={tickets} sortBy={sortBy} />;
  } else if (groupBy === 'user') {
    return <UserGroup className='kanban-board' tickets={tickets} users={users} sortBy={sortBy} />;
  } else if (groupBy === 'priority') {
    return <PriorityGroup className='kanban-board' tickets={tickets} sortBy={sortBy} />;
  }
  return null;
};

export default KanbanBoard;
