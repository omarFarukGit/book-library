import { getBookById } from "@/libs/data";
import { TBook, TParams } from "@/types/bookType";


const BookDetails = async ({ params }: TParams) => {
  const { id } = await params;
  const book: TBook = await getBookById(id);
  console.log(book);

  return <div>{book._id}</div>;
};

export default BookDetails;
