const model = require("../config/models/define_model");

const login = async (req) => {
  const { npm, password } = req.body;
  const user = await model.user.findOne({
    where: {
      ID: npm,
    },
    select: {
      ID: true,
      FName: true,
      LName: true,
      Pwd: true,
    },
  });
  if (user) {
    // const password_valid = await bcrypt.compare(request.password,user.Pwd);
    const password_valid = await bcrypt.compare(password, user.Pwd);
    if (password_valid) {
      // token = jwt.sign({ "id" : user.id,"email" : user.email,"first_name":user.first_name },process.env.SECRET);
      res.status(200).json({ token: "123" });
    } else {
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist" });
  }
};

module.exports = { login };
