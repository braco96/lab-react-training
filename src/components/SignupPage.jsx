import React, { useState } from 'react';

// Simple signup form demonstrating controlled components
function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  // Basic validators
  const emailValid = email.includes('@');
  const passwordStrong = password.length >= 8;

  // Determine greeting based on nationality
  const greetings = {
    en: 'Hello',
    de: 'Hallo',
    fr: 'Bonjour',
  };

  return (
    <div className="signup" style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Sign up</h2>
      {/* Email input */}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: email ? (emailValid ? 'green' : 'red') : undefined }}
        />
        {!emailValid && email && <p style={{ color: 'red' }}>Invalid email</p>}
      </div>

      {/* Password input */}
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderColor: password ? (passwordStrong ? 'green' : 'red') : undefined }}
        />
        {!passwordStrong && password && <p style={{ color: 'red' }}>Weak password</p>}
      </div>

      {/* Nationality selector */}
      <div>
        <label>Nationality</label>
        <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      {/* Output messages */}
      <p>{greetings[nationality]}</p>
      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
