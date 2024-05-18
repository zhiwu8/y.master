import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    switch (req.method) {
      case "GET": {
        res.json({ likes: 888, currentUserLikes: 888 })
        break
      }

      case "POST": {
        res.json({ likes: 888, currentUserLikes: 888 })
        break
      }

      default: {
        res.setHeader("Allow", ["GET", "POST"])
        res.status(405).send("Method Not Allowed")
      }
    }
  } catch (err: any) {
    console.error(err.message)
    res.status(500).json({
      statusCode: 500,
      message: err.message,
    })
  }
}