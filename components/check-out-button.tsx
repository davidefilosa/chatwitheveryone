"use client";

import { useSession } from "next-auth/react";
import React from "react";

const CheckOutButton = () => {
  const { data: session } = useSession();
  const createCheckoutSession = async () => {
    if (!session) return;
    //push document in firestore
    // stripe will create a session via firebase exstension
    // redirect to user page
  };
  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-60"
      >
        Sign Up
      </button>
    </div>
  );
};

export default CheckOutButton;
