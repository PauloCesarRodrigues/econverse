import type { NextApiRequest, NextApiResponse } from 'next'
import productsData from './productsData.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  return res.status(201).json(productsData)
}
