import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("board-study");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((list, i) => (
        <div key={i} className="list-item">
          <h4>{list.title}</h4>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
