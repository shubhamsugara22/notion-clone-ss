'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

function DeleteDocument() {

  const [isOpen, setIsOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {};

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="destructive">
      <DialogTrigger>Delete</DialogTrigger>
      </Button>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure, you want to delete ?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete document and
          all its content, removing all.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter className="sm:justify-end gap-2">
        <Button
        type="button"
        variant="destructive"
        onClick={handleDelete}
        disabled={isPending}
        >
          {isPending ? "Deleting..." : "Delete"}
        </Button>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  
  )
}

export default DeleteDocument