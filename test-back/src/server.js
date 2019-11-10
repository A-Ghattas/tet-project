import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import { json, urlencoded } from 'body-parser'

import productRouter from './resources/product/product.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(morgan('dev'))


// Routes
app.use('/api/products', productRouter)

// 404
app.use(function(req, res, next) {
  return res.status(404).json({ message: 'Route ' + req.url + ' Not found.' })
})

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).json({
    error: {
      message: err.message,
      stack: err.stack
    }
  })
})

export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
