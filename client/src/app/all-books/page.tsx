import { BookCard } from "@/components/BookCard";
import { getAllbooks } from "@/libs/data";
import { TBook } from "@/types/bookType";

const AllBookPage = async () => {
  const books = await getAllbooks();
  console.log(books);
  return (
    <div className=" max-w-7xl mx-auto space-y-4 ">
      <h1 className=" text-2xl ">All Books</h1>
      <div className=" grid grid-cols-4 gap-3">
        {books?.data?.map((book: TBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBookPage;
