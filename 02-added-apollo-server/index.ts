import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@email.com',
      role: 'employee',
    },
  });
  console.log(newUser);

  const updateUser = await prisma.user.update({
    data: { role: 'ADMIN' },
    where: { email: newUser.email },
  });
  console.log(updateUser);

  const deleteUser = await prisma.user.delete({
    where: { email: updateUser.email },
  });
  console.log(deleteUser);

  const userById = await prisma.user.findOne({
    where: { id: deleteUser.id },
  });
  console.log(userById);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
