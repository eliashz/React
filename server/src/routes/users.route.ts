import express from 'express'
import * as userServices from '../services/user.sevice'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(userServices.getUsers())
})

router.post('/', (_req, res) => {
  res.send('Post users')
})

router.put('/', (_req, res) => {
  res.send('Post users')
})

export default router
