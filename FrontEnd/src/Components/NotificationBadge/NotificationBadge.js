import React from 'react';
import './NotificationBadge.css';

const NotificationBadge = ({ count }) => {
  return (
    <div className="badge-container">
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  );
};

export default NotificationBadge;
