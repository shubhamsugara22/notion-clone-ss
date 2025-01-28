"use client";

import { Input } from "./ui/input";
import { FormEvent, useEffect, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { doc ,updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "./Editor";
import useOwner from "@/lib/useOwner";
import { Delete } from "lucide-react";
import DeleteDocument from "./DeleteDocument";
import InviteUser from "./InviteUser";

function Document({ id }: { id: string }) {
  const [data, loading] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");
  const [isUpdating, startTransition] = useTransition();
  const isOwner = useOwner();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);
  
  const updateTitle = (e: FormEvent)  => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
      });
    });
    }
  };

  return (
	<div className="flex-1 h-full bg-white p-5">
    <div className="flex max-w-6xl mx-auto justify-between pb-5">
      <form className="flex flex-1 space-x-2" onSubmit={updateTitle}>
        {/* update title ... */}
        <Input value={input} onChange={(e) => setInput(e.target.value)} />

        <Button disabled={isUpdating} type='submit' onClick={updateTitle}>
          {isUpdating ? "Updating..." : "Update"}
        </Button>
        
        { isOwner && (
          <>
          {/* InviteUser */}
          <InviteUser />
          <DeleteDocument />
          </>
        )}
              
      </form>
      </div>
    <div className="flex max-w-6xl mx-auto justify-between items-center mb-5">
      <ManageUsers />
      {/* ManageUsers */}

      {/* Avatars */}
    </div>

    <hr className="pb-10"/>
    {/* Collaborative editor */}
    <Editor />
  </div>
  )
}

export default Document