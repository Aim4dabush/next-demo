import fs from "fs";
import path from "path";

const handler = (req, res) => {
  if (req.method === "POST") {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const address = req.body.address;
    const total = req.body.total;

    const customerOrder = {
      id: new Date().toISOString(),
      firstName: firstName,
      lastName: lastName,
      address: address,
      total: total,
    };

    //store customer order
    const filePath = path.join(process.cwd(), "data", "order.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(customerOrder);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json({ message: "Success!", order: customerOrder });
  }
};

export default handler;
