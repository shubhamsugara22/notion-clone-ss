'use client'

import * as Y from "yjs";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
  } from "@/components/ui/dialog"

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


type Language =
  |  "english"
  |  "spanish"
  |  "portugese"
  |  "french"
  |  "german"
  |  "chinese"
  |  "arabic"
  |  "hindi"
  |  "russian"
  |  "japanese";

const languages: Language[] =[
	"english",
	"spanish",
	"portugese",
	"french",
	"german",
	"chinese",
	"arabic",
	"hindi",
	"russian",
	"japanese",
];
function TranslateDocument({ doc }: {doc: Y.Doc }) {
	const [isOpen, setIsOpen] = useState(false);

  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
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

}

export default TranslateDocument
