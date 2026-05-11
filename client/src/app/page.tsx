import { getAllbooks } from "@/libs/data";

const Home = async () => {
  const books = await getAllbooks();
  console.log(books);
  return (
    <div>
      {books?.data?.map((book) => (
        <div key={book._id}>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
