import fs from "fs";
import path from "path";

const buildPath = () => {
  return path.join(process.cwd(), "data", "order.json");
};

const dataExtraction = (path) => {
  const fileData = fs.readFileSync(path);
  const data = JSON.parse(fileData);

  return data;
};

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
    const filePath = buildPath();
    const data = dataExtraction(filePath);
    data.push(customerOrder);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json({ message: "Success!", order: customerOrder });
  } else {
    const filePath = buildPath();
    const data = dataExtraction(filePath);
    res.status(200).json({ order: data });
  }
};

export default handler;
