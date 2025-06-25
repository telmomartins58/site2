import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Método ${req.method} não permitido`)
  }

  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: 'telmogilchavinhamartina@gmail.com', // o teu email
      pass: 'hsfp mbju uppr oqse',               // a tua app password
    },
  })

  try {
    await transporter.sendMail({
      from: 'telmogilchavinhamartins@gmail.com',
      to: 'telmogilchavinhamartina@gmail.com',
      subject: `Nova mensagem de ${name}`,
      text: message,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br>${message}</p>
      `,
    })

    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' })
  } catch (error: any) {
    console.error('❌ Erro ao enviar email:', error)
    return res.status(500).json({
      message: 'Erro ao enviar o email',
      error: error.message || 'Erro desconhecido',
    })
  }
}
