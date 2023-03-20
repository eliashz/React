import express from 'express'
import * as userServices from '../services/user.sevice'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(userServices.getUsers())
})

router.get('/:id', (req, res) => {
  const user = userServices.findById(req.params.id)
  console.log(user)
  return user !== undefined ? res.send(user) : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  res.send('Post users')
})

router.put('/', (_req, res) => {
  res.send('Post users')
})

export default router
