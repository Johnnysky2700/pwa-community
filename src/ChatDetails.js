import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import ChatImages from './ChatImages';
import { BsSend } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoArrowBack } from "react-icons/io5";
import YouAvatar from './ChatsImg/you.png'; // ✅ Corrected path to avatar

const ChatDetails = () => {
  const { id } = useParams();
  const { data: initialChat, error, isPending } = useFetch('http://localhost:8000/chats/' + id);
  const [chat, setChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (initialChat) {
      setChat(initialChat);
    }
  }, [initialChat]);

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const messageObj = {
      id: Date.now(),
      sender: 'sender',
      text: newMessage,
      timestamp: new Date().toISOString(),
      avatar: 'you.png' // ✅ Matches key in ChatImages
    };

    const updatedChat = {
      ...chat,
      messages: [...chat.messages, messageObj],
    };

    setChat(updatedChat);
    setNewMessage('');

    fetch(`http://localhost:8000/chats/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: updatedChat.messages }),
    });
  };

  const handleDelete = () => {
    fetch('http://localhost:8000/chats/' + id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/ChatList');
    });
  };

  return (
    <div className="min-h-screen bg-primary rounded-t-3xl flex flex-col border border-green-600">
      {isPending && <div className="text-center mt-10">Loading chat...</div>}
      {error && <div className="text-center mt-10 text-red-500">{error}</div>}
      {chat && (
        <>
          {/* Header */}
          <div className="text-white px-6 py-4 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <IoArrowBack className="text-2xl cursor-pointer" onClick={() => navigate('/ChatList')} />
              <div>
                <h2 className="text-lg font-bold">{chat.name}</h2>
                <p className="text-sm opacity-80">{chat.phone || '+123 456 7890'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdNotificationsActive className="text-2xl cursor-pointer" />
              <Link to="/AddContact">
                <PiDotsThreeVerticalBold className="text-2xl cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 rounded-t-3xl bg-[#FFFFFF] overflow-y-auto p-4 space-y-4 pb-28">
            {chat.messages.map((message, index) => {
              const isSender = message.sender === 'sender';
              const avatar = message.avatar || chat.avatar;

              return (
                <div
                  key={index}
                  className={`flex items-end ${isSender ? 'justify-end' : 'justify-start'} gap-2`}
                >
                  {!isSender && (
                    <img
                      src={ChatImages[avatar] || ChatImages['default.png']}
                      alt="avatar"
                      className="w-9 h-9 rounded-full"
                    />
                  )}

                  <div
                    className={`max-w-sm px-5 py-3 ${isSender ? 'bg-purple-500 text-white' : 'bg-purple-200 text-black'} rounded-[20px]`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-[10px] text-right mt-1 opacity-70">
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  {isSender && (
                    <img
                      src={ChatImages[avatar] || YouAvatar} // ✅ Use imported fallback if not found
                      alt="avatar"
                      className="w-9 h-9 rounded-full"
                    />
                  )}
                </div>
              );
            })}

            {/* Input area */}
            <div className="p-4 bg-white flex items-center gap-3 rounded-t-3xl shadow-inner fixed bottom-0 left-0 w-full">
              <button className="text-gray-500 text-xl"><FaRegSmile /></button>
              <input
                type="text"
                placeholder="Type message here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 outline-none bg-gray-100 p-3 rounded-full text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white p-3 rounded-full hover:bg-purple-600"
              >
                <BsSend className="text-lg" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatDetails;
