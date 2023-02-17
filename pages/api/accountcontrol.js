// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let fs = require("fs");
// let account = require("@/data/account.json");
let database = require("@/data/account.json");

export default function handler(req, res) {
  const { method, body } = req;
  const dataget = () => {
    res.status(200).json(database);
  };
  const datapost = () => {
    database.push(body);
    datasave();
  };
  const dataput = () => {
    console.log("dataput");
  };
  const datadelete = () => {
    console.log("datadelete");
  };
  const datasave = () => {
    fs.writeFileSync("data/account.json", JSON.stringify(database));
    res.status(200).json(database);
  };

  switch (method) {
    case "GET":
      dataget();
      break;
    case "POST":
      datapost();
      break;
    case "PUT":
      dataput();
      break;
    case "DELETE":
      datadelete();
      break;
    default:
      break;
  }
}
