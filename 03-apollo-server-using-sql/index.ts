import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // SELECT ALL RECORD
  let allUsers = await prisma.$queryRaw`SELECT * FROM User;`;
  console.log('>>> allUsers\n', allUsers);

  // INSERT ONE RECORD
  const data = {
    name: 'Alice',
    email: 'alice@email.com',
    role: 'employee',
  };
  const newUser = await prisma.$executeRaw`INSERT INTO User(name, email, role) VALUES(${data.name}, ${data.email}, ${data.role});`;
  console.log('>>> newUser\n', newUser);

  // SELECT ONE RECORD
  const userById = await prisma.$queryRaw`SELECT id, name, email FROM User WHERE name = ${data.name} AND email = ${data.email} ORDER BY id LIMIT 1;`;
  console.log('>>> findOneUser\n', userById[0]);

  // UPDATE ONE RECORD
  const newRole = 'ADMIN';
  const updateUser = await prisma.$executeRaw`UPDATE User SET role = ${newRole} WHERE email = ${userById[0].email};`;
  console.log('>>> updateUser\n', updateUser);

  // DELETE ONE RECORD
  const deleteUser = await prisma.$executeRaw`DELETE FROM User WHERE email = ${userById[0].email};`;
  console.log('>>> deleteUser\n', deleteUser);

  // SELECT ALL RECORD
  allUsers = await prisma.$queryRaw`SELECT * FROM User;`;
  console.log('>>> allUsers\n', allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
