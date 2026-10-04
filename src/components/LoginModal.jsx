import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, ShieldCheck, AlertCircle, Anchor } from 'lucide-react';
import { sound } from '../utils/audio';

const DEFAULT_USERNAME = 'mission@1';
const DEFAULT_PASSWORD = 'mission1@2026';

export default function LoginModal({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();

    if (username.trim() === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      sound.playSuccess();
      setError('');
      onLoginSuccess();
    } else {
      sound.playError();
      setError('Invalid Username or Password! Please check credentials.');
    }
  };

  return (
    <div className="login-modal-overlay" id="login-modal-overlay">
      <motion.div
        className="login-modal-card"
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header decoration */}
        <div className="login-modal-header">
          <div className="login-badge-icon">
            <Anchor size={32} color="#ffd700" />
          </div>
          <h2 className="login-modal-title">CAPTAIN'S PORTAL LOGIN</h2>
          <p className="login-modal-subtitle">
            Enter authorized mission credentials to access the Lost Treasure of Digital Sea
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <motion.div
            className="login-error-box"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={18} className="login-error-icon" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-modal-form">
          <div className="login-field-group">
            <label htmlFor="login-username" className="login-field-label">
              <User size={16} />
              <span>Username</span>
            </label>
            <div className="login-input-wrapper">
              <input
                id="login-username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter Username"
                required
                autoComplete="off"
                className="login-input"
              />
            </div>
          </div>

          <div className="login-field-group">
            <label htmlFor="login-password" className="login-field-label">
              <Lock size={16} />
              <span>Password</span>
            </label>
            <div className="login-input-wrapper">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter Password"
                required
                autoComplete="off"
                className="login-input"
              />
              <button
                type="button"
                className="login-pw-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Hide password' : 'Show password'}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            <ShieldCheck size={20} />
            <span>VERIFY &amp; BOARD SHIP &gt;&gt;</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
}
