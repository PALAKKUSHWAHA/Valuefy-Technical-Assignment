import React, { useState } from 'react';
import axios from '../services/api';
import ResponseRenderer from './ResponseRenderer';

function ChatBox() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/ask', { question: query });
    setResponse(res.data.response);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something..."
          className="border p-2 w-full"
        />
      </form>
      <ResponseRenderer response={response} />
    </div>
  );
}

export default ChatBox;
