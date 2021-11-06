// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      { name: 'John Doe' },
      { name: 'Belicio Cardoso' },
      { name: 'Antonio Marcos' },
      { name: 'Jose Maria' },
      { name: 'Joâo Meneses' },
      { name: 'Julia Posts' },
    ]
  )
}
