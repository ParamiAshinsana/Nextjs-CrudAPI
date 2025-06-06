import { dbConnect } from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const users = await User.find();
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    res.status(201).json(user);
  } else {
    res.status(405).end(); 
  }
}
