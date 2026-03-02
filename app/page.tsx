import { GET } from "./api/books/route"

const Home = async () => {

  const books = await GET();
  console.log("hola",books)
  return (
    <main>
      <div>Welcome to nextjs</div>
    </main>
  )
}

export default Home