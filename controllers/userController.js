const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

//user signUp
exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("All fields are req");
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    // send user a token
    cookieToken(user, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//get all
exports.getAllUser = async (req, res) => {
  try {
    const allUser = await prisma.user.findMany();
    res.send(allUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      res.send({ message: "email id not found" });
    }
    const newuser = await prisma.user.update({
      where: { id: user.id },
      data: {
        name: "Owais Siddiqui",
      },
    });
    res.send(newuser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
