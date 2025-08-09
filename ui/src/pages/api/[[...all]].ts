import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await httpProxyMiddleware(req, res, {
    target: "http://localhost:3001",
    changeOrigin: true,
  });
}
