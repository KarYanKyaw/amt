"use client";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../firebaseConfig";

const Page = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

git branch -M main
git push -u origin main

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div>
        <button
          onClick={signInWithGoogle}
          className="bg-white text-black p-4 rounded shadow-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Page;
