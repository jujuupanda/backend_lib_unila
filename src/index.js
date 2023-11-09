const app = require("./app/app");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server berhasil di running di port ${PORT}`);
});
