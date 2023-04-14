import { connectDB } from "@/util/database";

export default async function Detail() {
  const db = (await connectDB).db("board-study");
  let result = await db.collection("post").findOne({ title: "글제목1" });

  console.log(result);

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>글제목</h4>
      <p>글내용</p>
    </div>
  );
}
