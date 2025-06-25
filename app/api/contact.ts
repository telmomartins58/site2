// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USERNAME, // Vais receber aqui
        subject: `Nova mensagem de ${name}`,
        text: message,
        html: `
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong><br>${message}</p>
        `,
      })

      return res.status(200).json({ message: 'Mensagem enviada com sucesso!' })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      return res.status(500).json({ message: 'Erro ao enviar o email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Método ${req.method} não permitido`)
  }
}
