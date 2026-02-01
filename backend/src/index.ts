import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { auth } from './auth'
import * as dotenv from 'dotenv'

dotenv.config()

const app = new Hono()

app.use('*', cors({
    origin: ['http://localhost:3000'], // Allow frontend origin
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
  }))

app.on(['POST', 'GET'], '/api/auth/*', (c) => {
    return auth.handler(c.req.raw)
})

const port = 4000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
