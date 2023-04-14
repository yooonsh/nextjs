import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("board-study");
  let result = await db.collection("post").find().toArray();

  return <div>하이</div>;
}
