'use client'
import { useRouter } from "next/navigation";
import { Button } from "./button"
import { useTransition } from "react";

function NewDocumentButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleCreateNewDocument = () => {
      startTransition(async() => {
        const { docId } = await handleCreateNewDocument();
        router.push(`/doc/${docId}`);// Create a new document
      });
    };
    
    return (
	<Button onClick={handleCreateNewDocument} disabled={!isPending}>
    {isPending ? "Creating..." : "Create a new document"}
  </Button>
  )
}

export default NewDocumentButton