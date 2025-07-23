
import React, { useEffect, useState } from 'react';
import { db, auth } from './firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

function Chat({ user }) {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
const q = query(collection(db, 'messages'), orderBy('created'));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(snapshot.docs.map(doc => doc.data()))
    );
    return unsubscribe;
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text) return;
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      name: user.displayName,
      text,
      created: new Date()
    });
    setText('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Chat - StarApp ✨</h3>
      <div style={{ height: '300px', overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.name}: </strong>{msg.text}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
