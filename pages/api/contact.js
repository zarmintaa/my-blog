import { MongoClient } from "mongodb";

export const DB_URL =
  "mongodb+srv://user1:user1@cluster0.wb1uu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(DB_URL);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      await client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    await client.close();

    res
      .status(201)
      .json({ status: "Successfully stored message!", message: newMessage });
  }
};

export default handler;
