
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import serverless from 'serverless-http';
import subscriberRoutes from './routes/subscribersRoute.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
 res.send("home pageee")
})

app.use('/api', subscriberRoutes)


app.listen(5000, () => {
  console.log(`Server running on http://localhost:${5000}`)
})



export const handler = serverless(app);
