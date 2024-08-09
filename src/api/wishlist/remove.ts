import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.body
    await prisma.wishListItem.delete({
      where: { id: Number(id) },
    })
    res.status(200).json({ message: 'Item removido com sucesso!' })
  } else {
    res.status(405).json({ message: 'Não permitido.' })
  }
}