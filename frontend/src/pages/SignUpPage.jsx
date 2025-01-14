import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SignUp />
    </div>
  );
};

export default SignUpPage;