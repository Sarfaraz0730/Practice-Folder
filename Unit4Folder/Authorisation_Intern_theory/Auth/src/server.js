const app = require("./index");
const connect = require("./configs/db");

app.listen(23456, async function () {
  try {
    await connect();
    console.log("listening on port 23456");
  } catch (err) {
    console.log(err);
  }
});
