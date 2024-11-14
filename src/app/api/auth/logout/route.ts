export async function POST() {
  return Response.json(
    {
      message: "Buộc đăng xuất thành công",
    },
    {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken=; Path=/; HttpOnly; Max-Age=0`,
      },
    },
  );
}
