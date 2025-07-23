
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';

function Login() {
  const login = () => signInWithPopup(auth, provider);
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h2>Welcome to StarApp 🚀</h2>
      <button onClick={login}>Sign in with Google</button>
    </div>
  );
}

export default Login;
