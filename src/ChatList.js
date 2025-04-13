import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChatContext } from './App';
import ChatImages from './ChatImages';

const ChatList = () => {
  const { chats, loading } = useContext(ChatContext); // Access chats from context
  const [searchTerm, setSearchTerm] = useState('');

  // Filter chats by search term
  const filteredChats = chats.filter(chat =>
    (chat.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10">Loading chats...</p>;

  return (
    <div className="min-h-screen bg-purple-100 p-4">
      {/* Header */}
      <div className="bg-primary text-white rounded-2xl p-4 mb-6">
        <h1 className="text-lg font-bold mb-4">PROGRESSIVE WEB APP</h1>
        <div className="flex items-center bg-white rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-sm text-gray-700"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
            A
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="space-y-4">
        {filteredChats.length > 0 ? (
          filteredChats.map(chat => (
            <Link
              to={`/chats/${chat.id}`}
              key={chat.id}
              className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                   <img
                    src={ChatImages[chat.avatar] || ChatImages['default.png']}
                    alt={chat.name}
                    className="w-10 h-10 rounded-full object-cover"
                   />
                <div>
                  <h3 className="font-semibold text-sm">{chat.name}</h3>
                  <p className="text-xs text-gray-500">
                    {chat.messages.length > 0
                      ? chat.messages[chat.messages.length - 1].text // Last message text
                      : 'No messages yet.'}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">
                  {chat.messages.length > 0
                    ? new Date(
                        chat.messages[chat.messages.length - 1].timestamp
                      ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Last message time
                    : ''}
                </p>
                {chat.messages.length > 0 && (
                  <div className="bg-primary text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                    {chat.messages.length} {/* Message count */}
                  </div>
                )}
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 text-sm">No chats available.</p>
        )}
      </div>
    </div>
  );
};

export default ChatList;
