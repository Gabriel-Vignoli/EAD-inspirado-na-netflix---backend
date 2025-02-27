// src/server.ts

import express from 'express'
import { sequelize } from './database'
import { adminJs, adminJsRouter } from './adminjs'
import { router } from './routes'
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.static("public"))

app.use(express.json())

app.use(router)

// app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull')
  })

  console.log(`Server started successfuly at port ${PORT}`)
})