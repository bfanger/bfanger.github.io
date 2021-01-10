import "core-js"
import "regenerator-runtime/runtime"
import express from "express"
import compression from "compression"
import * as sapper from "@sapper/server"

const { PORT } = process.env

express()
  .use(
    compression({ threshold: 0 }),
    express.static("static"),
    sapper.middleware()
  )
  .listen(PORT)
