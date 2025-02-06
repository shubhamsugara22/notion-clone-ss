'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FormEvent, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { usePathname , useRouter} from "next/navigation";
import { InviteUserToDocument } from "@/actions/actions";
import { toast } from "sonner";
import { Input } from "@/components/ui/input"

function ChatToDocument() {
	const [input, setInput] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [isPending, startTransition] = useTransition();
	const [summary, setSummary] = useState("");
	const [question, setQuestion] = useState("");
	

  const handleInvite = async (e: FormEvent) => {
	e.preventDefault();

    const roomId = pathname.split("/").pop();
    if(!roomId) return;

    startTransition(async () => {
      const { success } = await InviteUserToDocument(roomId, email);

      if (success) {
        setIsOpen(false);
        setEmail("");
        toast.success("User added to room successfully");
      } else {
        toast.error("Failed to add user to room");
        }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="outline">
      <DialogTrigger>Invite</DialogTrigger>
      </Button>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Invite a User to collaborate!</DialogTitle>
        <DialogDescription>
         Enter the email of user you want to invite.
        </DialogDescription>
      </DialogHeader>
      <form className="flex gap-2" onSubmit={handleInvite}>
		<Input
		 type="email"
		 placeholder="Email"
		 className="w-full"
		 value={email}
		 onChange={(e) => setEmail(e.target.value)}
		 />
		 <Button type="submit" disabled={!email || isPending}>
			{isPending ? "Inviting..." : "Invite"}
		</Button>
	  </form>

    </DialogContent>
  </Dialog>
  
  )
}

export default ChatToDocument