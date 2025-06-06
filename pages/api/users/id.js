import { dbConnect } from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const user = await User.findById(id);
    res.status(200).json(user);
  } else if (req.method === "PUT") {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } else if (req.method === "DELETE") {
    await User.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
