import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body
    const newItem = await prisma.wishListItem.create({
      data: { name },
    })
    res.status(201).json(newItem)
  } else {
    res.status(405).json({ message: 'Não permitido!' })
  }
}