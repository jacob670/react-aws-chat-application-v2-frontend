import React, { useState, useEffect, useCallback } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserName } from './userService';

import './css/AuthenticatedPages/SimpleChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState(null);

  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // setup server side
    const socket = new SockJS('http://localhost:8083/ws');
    const client = new Client({
      webSocketFactory: () => socket,
      // refresh every 5 seconds
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected');
        setIsConnected(true);

        client.subscribe('/topic/public', (message) => {
          const chatMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, chatMessage]);
        });

      },
      onStompError: (frame) => {
        console.error('STOMP Error:', frame);
      },
    });
    setStompClient(client);
    client.activate();

    const fetchUserName = async () => {
      try {
        const name = await getUserName();
        setUserName(name);
      } catch (error) {
        console.error('Failed to fetch user name:', error);
      }
    };
    fetchUserName();

    return () => {
      client.deactivate();
    };
  }, []);

  const sendMessage = useCallback(() => {
    if (inputMessage && isConnected && stompClient) {
      const chatMessage = { sender: userName, content: inputMessage };
      stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(chatMessage),
      });
      setInputMessage('');
    } else {
      console.warn('Cannot send message: STOMP client is not connected.');
    }
  }, [inputMessage, username, isConnected, stompClient]);
  


  return (
    <div class='chat-container'>

      {/* <Link to="/" class='hea'>
        <h1>QuickChats!</h1>
      </Link> */}


      <div class="chat-box">
        {/* <p>{userName} has joined to chat</p> */}


        {/* <div class="mes-con">
        {messages.map((message, index) => (
          <li>
          <h2>{userName}  
            <p>{message.content}</p>
          </h2>
          </li>
          ))}
          </div> */}


        <ul className="chat-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`chat-item ${message.sender === userName ? 'sent' : 'received'}`}
            >
              <div className="chat-header">
                <h2 className="chat-username">{message.sender}</h2>
              </div>
              <p className="chat-message">{message.content}</p>
            </li>
          ))}
        </ul>



      </div>





      <div class='input-simple-message'>
        <input
          type="text"
          placeholder="Enter your message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />

        <button onClick={sendMessage}>Send</button>

        <Link to="/quickChats">
          <button>Leave Room</button>
        </Link>
      </div>

    </div>
  );
};

export default ChatRoom;
