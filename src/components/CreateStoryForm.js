// src/components/CreateStoryForm.js
import React, { useState } from 'react';
import './CreateStoryForm.css';

function CreateStoryForm() {
  const [story, setStory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (story.length < 3) {
      setError('Story must be at least 3 characters long.');
    } else {
      alert(`Story submitted: ${story}`);
      setStory('');
      setError('');
    }
  };

  return (
    <form className="create-story-form" onSubmit={handleSubmit}>
      <h2>Create a New Story</h2>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Write your story here..."
        rows="4"
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateStoryForm;
