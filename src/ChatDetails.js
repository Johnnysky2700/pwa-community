import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import ChatImages from './ChatImages';
import { BsSend } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoArrowBack } from "react-icons/io5";

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
      avatar: 'you.png'
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
    <div className="min-h-screen flex flex-col">
      {isPending && <div className="text-center mt-10">Loading chat...</div>}
      {error && <div className="text-center mt-10 text-red-500">{error}</div>}
      {chat && (
        <>
          {/* Header */}
          <div className="bg-primary text-white px-6 py-4 flex items-center justify-between rounded-2xl">
            {/* Left side: Back button and chat info */}
            <div className="flex items-center gap-4">
              <IoArrowBack className="text-2xl cursor-pointer" />
              <div>
              <h2 className="text-xl font-bold">{chat.name}</h2>
              <p className="text-sm">{chat.phone || '+123 456 7890'}</p>
              </div>
            </div>

            {/* Right side: Notification and options */}
            <div className="flex items-center gap-4">
              <MdNotificationsActive className="text-2xl cursor-pointer" />
              <PiDotsThreeVerticalBold className="text-2xl cursor-pointer" />
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chat.messages.map((message, index) => {
              const isSender = message.sender === 'sender';
              const avatar = message.avatar || chat.avatar;

              return (
                <div
                  key={index}
                  className={`flex items-end ${isSender ? 'justify-end' : 'justify-start'}`}
                >
                  {!isSender && (
                    <img
                      src={ChatImages[avatar] || ChatImages['default.png']}
                      alt="avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}

                  <div
                    className={`max-w-xs p-3 rounded-xl ${
                      isSender
                        ? 'bg-purple-500 text-white rounded-br-none'
                        : 'bg-purple-200 text-black rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-[10px] text-right mt-1">
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  {isSender && (
                    <img
                      src={ChatImages[avatar] || ChatImages['default.png']}
                      alt="avatar"
                      className="w-8 h-8 rounded-full ml-2"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Input area */}
          <div className="p-4 bg-white flex items-center gap-2 shadow-inner rounded-t-2xl">
            <button className="text-gray-500 text-xl"><FaRegSmile /></button>
            <input
              type="text"
              placeholder="Type message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 outline-none bg-gray-100 p-2 rounded-full text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-primary text-white p-2 rounded-full hover:bg-purple-600"
            >
            <BsSend />
            </button>
          {/* </div>

          {/* Optional delete
          <div className="text-center mt-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Delete Chat
            </button> */}
          </div>
        </>
      )}
    </div>
  );
};

export default ChatDetails;
