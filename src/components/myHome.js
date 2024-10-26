import React from 'react';
import MainContent from './MainContent'; // Importing your main content component
import Sidebar from './Sidebar'; // Importing your sidebar component
import TaskBar from './TaskBar'; // Importing your taskbar component

const MyHome = () => {
    return (
        <div className="row">
            <Sidebar />       {/* Sidebar */}
            <MainContent />   {/* Main content area */}
            <TaskBar />       {/* Task bar */}
        </div>
    );
};

export default MyHome;
