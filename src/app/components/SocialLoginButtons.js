/* @useClient */
'use client'
import React from 'react';

const SocialLoginButtons = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign in with Facebook
      </button>
      <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLoginButtons;
