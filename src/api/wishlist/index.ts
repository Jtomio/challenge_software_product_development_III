import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const items = await prisma.wishListItem.findMany()
    res.status(200).json(items)
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}