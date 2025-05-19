const prisma = require("./index");

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "user1",
        email: "user1@gmail.com",
        password: "123",
      },
      {
        name: "user2",
        email: "user2@gmail.com",
        password: "123",
      },
      {
        name: "user3",
        email: "user3@gmail.com",
        password: "123",
      },
    ],
  });
}

// delete all user
async function deleteAll() {
  await prisma.user.deleteMany();
}

main()
  .then(() => console.log("seeding done"))
  .catch((error) => console.log(error));

// deleteAll()
//   .then(() => console.log("deleted all user"))
//   .catch((error) => console.log(error));
