import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  const { content } = await req.json();

  // DB送信処理を書く
  console.log(content);

  return NextResponse.json({}, { status: 200 });
};

export { POST };
