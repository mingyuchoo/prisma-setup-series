import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const allUsers = await prisma.$queryRaw('SELECT * FROM User;');
  const allUsers = await prisma.user.findMany();
  console.log('>>> allUsers\n', allUsers);

  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@email.com',
      role: 'employee',
    },
  });

  console.log('>>> newUser\n', newUser);

  const updateUser = await prisma.user.update({
    data: { role: 'ADMIN' },
    where: { email: newUser.email },
  });
  console.log('>>> updateUser\n', updateUser);

  const deleteUser = await prisma.user.delete({
    where: { email: updateUser.email },
  });
  console.log('>>> deleteUser\n', deleteUser);

  const userById = await prisma.user.findOne({
    where: { id: newUser.id },
  });
  console.log('>>> findOneUser\n', userById);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
