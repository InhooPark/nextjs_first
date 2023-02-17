// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let fs = require("fs");
let database = require("@/data/listdata.json");

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
    let user = database.find((obj) => obj.id === body.id);
    Object.assign(user, body);
    datasave();
  };
  const datadelete = () => {
    database = database.filter((obj) => obj.id !== body);
    datasave();
  };
  const datasave = () => {
    fs.writeFileSync("data/listdata.json", JSON.stringify(database));
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
