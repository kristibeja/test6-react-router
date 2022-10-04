import React from 'react';
import "./Dashboard.css";
import LeftDashboard from './LeftDashboard';
import Deals from './Deals';
import Tasks from './Tasks';

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <LeftDashboard />
        <div className='deals-and-tasks'>
          <Deals />
          <Tasks />
        </div>
    </div>
  )
}
