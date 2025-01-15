import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <SignIn  appearance={{
      baseTheme: dark,
    }} />
    </div>
  );
};

export default SignInPage;
