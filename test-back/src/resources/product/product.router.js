import {Router} from 'express'
import {getProducts} from './product.controllers'

const router = Router()

router.post('/', getProducts)

export default router
