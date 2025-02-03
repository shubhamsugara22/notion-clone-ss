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
import { useState, useTransition } from "react";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select"
import { LanguagesIcon } from "lucide-react";
  
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
	const [language, setLanguage] = useState<string>("");
	const [summary, setSummary] = useState("");
	const [question, setQuestion] = useState("");
	const [isPending, startTransition] = useTransition();

  const handleAskQuestion = async ( e: React.FormEvent) => {
	e.preventDefault();

	startTransition(async () => {});
  };

  return (
	<Dialog open={isOpen} onOpenChange={setIsOpen}>
    <Button asChild variant="outline">
    <DialogTrigger>
	 <LanguagesIcon />
	 Translate
	</DialogTrigger>
  </Button>
  <DialogContent>
    <DialogHeader>
	    <DialogTitle>Invite a User to collaborate!</DialogTitle>
	        <DialogDescription>
	          Enter the email of user you want to invite.
	        </DialogDescription>
			<hr className="mt-5"/>
			{question && <p className="mt-5 text-gray-500">Q: {question}</p>}
    </DialogHeader>
    <form className="flex gap-2" onSubmit={handleAskQuestion}>
	    <Select
	       value={language}
	       onValueChange={(value) => setLanguage(value)}
	    >
		    <SelectTrigger className="w-full">
			    <SelectValue placeholder="Select a Language" />
		    </SelectTrigger>
	    </Select>

	    <Button type="submit" disabled={!language || isPending}>
		    {isPending ? "Translating..." : "Translate"}
	    </Button>
      </form>
    </DialogContent>
  </Dialog>

  )

 };  


export default TranslateDocument
