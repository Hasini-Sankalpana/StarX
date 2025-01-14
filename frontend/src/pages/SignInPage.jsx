import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <SignIn />
    </div>
  );
};

export default SignInPage;
