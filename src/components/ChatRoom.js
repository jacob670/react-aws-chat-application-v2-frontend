import React, { useState, useEffect, useCallback } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    // really basic version of if no token, cant be on this page
    // will update this
    if (sessionStorage.getItem('accessToken') === null) {
        navigate('/')
    }
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

    return () => {
      client.deactivate();
    };
  }, []);

  const sendMessage = useCallback(() => {
    if (inputMessage && isConnected && stompClient) {
      const chatMessage = { sender: username, content: inputMessage };
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
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              {message.sender}: {message.content}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter your message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
