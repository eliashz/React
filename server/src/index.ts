import express from 'express'
import userRouter from './routes/users.route'

const app = express()

app.use(express.json())
//48:53
const PORT = 4000

app.get('/ping', (_req, res) => {
  console.log('Ping!')
  res.send('Pong!')
})

app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
