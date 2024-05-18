import prisma from "@/lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const slug = z.string().parse(req.query.slug)

    switch (req.method) {
      case "GET": {
        // 不再从数据库查询数据
        res.json(888) // 直接返回 888
        break
      }

      case "POST": {
        // 不再更新数据库中的视图计数
        res.json(888) // 直接返回 888
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