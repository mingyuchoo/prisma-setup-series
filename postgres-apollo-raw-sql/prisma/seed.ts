import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

const main = async () => {
  const sasha = await prisma.user.create({
    data: {
      name: 'Sasha',
      email: 'sasha@email.com',
      role: 'employee',
    },
  });
  console.log(sasha);
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
