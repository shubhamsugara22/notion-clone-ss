"use client";

import { Input } from "./ui/input";
import { FormEvent, useEffect, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { updateDoc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

function Document({ id }: { id: string }) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");
  const [isUpdating, startTransition] = useTransition();

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
	<div>

    <div>
      <form onSubmit={updateTitle}>
        {/* update title ... */}
        <Input value={input} onChange={(e) => setInput(e.target.value)} />

        <Button disabled={isUpdating} type='submit'>
          {isUpdating ? "Updating..." : "Update"}
        </Button>
        {/* IF */}
        {/* isOwner && inviteuser , deletedocument */}
      
      </form>
      </div>
    <div>
      {/* ManageUsers */}

      {/* Avatars */}
    </div>
  </div>
  )
}

export default Document