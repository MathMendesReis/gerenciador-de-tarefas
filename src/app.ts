import express from 'express'
import {Request,Response} from 'express'
const app = express()
app.get('/', function (req:Request, res:Response) {
  res.send('Hello World')
})
export {app}