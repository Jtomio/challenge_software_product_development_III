import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id, name } = req.body

    try {
      const updatedItem = await prisma.wishListItem.update({
        where: { id: Number(id) },
        data: { name },
      })
      res.status(200).json(updatedItem)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o item' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido!' })
  }
}