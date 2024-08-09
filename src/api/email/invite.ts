import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import prisma from '@/lib/prisma'

sgMail.setApiKey(process.env.NODE_ENV)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body
    const msg = {
      to: email,
      from: 'your-email@example.com',
      subject: 'Convite para Amigo Secreto',
      text: 'Você foi confirmado para participar de um amigo secreto!',
    }

    try {
      await sgMail.send(msg)
      await prisma.invitation.create({
        data: { email },
      })
      res.status(200).json({ message: 'Convite enviado' })
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enviar convite' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}