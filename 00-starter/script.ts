import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // create
  const postCreate = await prisma.post.create({
    data: {
      title: "Prisma makes databases easy",
      author: {
        connect: { email: "sarah@prisma.io" },
      },
    },
  });
  console.log(postCreate);

  // select
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });
  console.dir(allUsers, { depth: null });

  // update
  const postUpdate = await prisma.post.update({
    where: { id: 2 },
    data: { published: true },
  });
  console.log(postUpdate);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
