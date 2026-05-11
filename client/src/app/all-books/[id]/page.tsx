import { getBookById } from "@/libs/data";
import { TBook, TParams } from "@/types/bookType";
import { Button, Card, CardContent } from "@heroui/react";
import { Badge, Link } from "lucide-react";
import Image from "next/image";

const BookDetails = async ({ params }: TParams) => {
  const { id } = await params;
  const book: TBook = await getBookById(id);
  console.log(book);

  return (
    <div className="container mx-auto py-16 space-y-20">
      <Card className="bg-gray-900 border-gray-800 rounded-2xl shadow-2xl p-6 md:p-10">
        <CardContent className="flex flex-col md:flex-row gap-10">
          <div className="relative w-full md:w-1/3 h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={book.image_url || "/books_demo.png"}
              alt={book.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-1 text-gray-200">
            <h1 className="text-4xl font-bold mb-3">{book.title}</h1>

            <div className="flex flex-wrap gap-3 mt-4">
              <Badge>Author: {book.author}</Badge>

              <Badge
                fontVariant="outline"
                className={
                  book.available_quantity ? "text-green-400" : "text-red-400"
                }
              >
                Copies: {book.available_quantity}
              </Badge>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              {book.description}
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href="/all-books">
                <Button variant="outline" className="rounded-lg">
                  Back to Books
                </Button>
              </Link>

              {book.available_quantity ? (
                <Link href={`/borrow/${book._id}`}>
                  <Button className="rounded-lg">Borrow Book</Button>
                </Link>
              ) : (
                <Button isDisabled className="rounded-lg opacity-60">
                  Not Available
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetails;
