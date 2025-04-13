import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const ChatDetails = () => {
  const { id } = useParams();
  const { data: chat, error, isPending } = useFetch('http://localhost:8000/chats/' + id); 
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:8000/chats/' + id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/ChatList'); 
    });
  };

  return (
    <div className="chat-details">
      {isPending && <div>Loading chat...</div>}
      {error && <div>{error}</div>}
      {chat && (
        <article>
          <h2>{chat.title}</h2>
          <p>Sent by: {chat.author}</p>
          <div>{chat.body}</div>
          <button
            onClick={handleDelete}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Delete Chat
          </button>
        </article>
      )}
    </div>
  );
};

export default ChatDetails;
