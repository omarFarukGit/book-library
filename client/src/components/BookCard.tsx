"use client";

import Link from "next/link";

import Image from "next/image";
import { TBook } from "@/types/bookType";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@heroui/react";

type TBookprops = {
  book: TBook;
};

export function BookCard({ book }: TBookprops) {
  return (
    <Card className="rounded-2xl hover-effect bg-[rgba(26,25,25,0.86)] backdrop-blur-sm shadow-sm ">
      <CardHeader className="flex flex-col items-center gap-2">
        <div className="w-full h-48 relative rounded-lg overflow-hidden">
          <Image
            src={book.image_url || "/books_demo.png"}
            alt={book.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
        <CardTitle className="text-xl mt-2 text-white">{book.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm font-semibold"> {book.description} </p>
        <p className="text-sm text-muted-foreground">Author: {book.author}</p>
        {/* {/* <p className="text-sm">Genre: {book.genre}</p> */}
        <p className="text-sm">Copies: {book.category}</p>
      </CardContent>

      <div className="flex gap-2.5 p-4">
        <Link href={`/all-books/${book._id}`}>
          <Button variant="primary">See Details</Button>
        </Link>
      </div>
    </Card>
  );
}
