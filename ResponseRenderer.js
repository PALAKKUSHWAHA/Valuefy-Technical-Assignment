import React from 'react';

function ResponseRenderer({ response }) {
  if (!response) return null;
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <pre>{response}</pre>
    </div>
  );
}

export default ResponseRenderer;
