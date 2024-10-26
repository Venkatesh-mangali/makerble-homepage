// src/components/MainContent.js
import React from 'react';
import TaskBoard from './TaskBoard';
import CreateStoryForm from './CreateStoryForm';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <h1>My Home Page</h1>
      <CreateStoryForm />
      <TaskBoard />
    </main>
  );
}

export default MainContent;
