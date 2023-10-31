"use client";
import React from "react";
import { Button } from "./ui/button";
import { MessageSquarePlus } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateChatButton = () => {
  const router = useRouter();
  const createNewChat = async () => {
    router.push(`/chat/chatId`);
  };
  return (
    <Button variant={"ghost"} onClick={createNewChat}>
      <MessageSquarePlus />
    </Button>
  );
};

export default CreateChatButton;
