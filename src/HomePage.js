import React, { useState, useEffect } from 'react';
import ChatList from './ChatList';

const HomePage = () => {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/chats')
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the chats');
        }
        return res.json();
      })
      .then((data) => {
        setChats(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <p>Loading chats...</p>}
      {error && <p>{error}</p>}
      <ChatList blogs={chats} />
    </div>
  );
};

export default HomePage;
