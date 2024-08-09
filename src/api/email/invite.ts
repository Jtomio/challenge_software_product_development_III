import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import prisma from '@/lib/prisma'

const apiKey = process.env.SENDGRID_API_KEY
if(!apiKey) {
 console.log('SENDGRID_KEY undefinied!')
} else {
  sgMail.setApiKey(apiKey)
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name } = req.body
    const msg = {
      to: email,
      from: 'your-email@example.com',
      subject: 'Convite para Amigo Secreto',
      text: `Olá, ${name} você agora esta participando da nossa lista de amigo secreto!`,
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