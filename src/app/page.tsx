import { prisma } from "@/prisma"

export default async function Home() {
  const users = await prisma.user.findMany()
  return (
    <>
      Home
      {JSON.stringify(users,null,2)}
    </>
  );
}
