import express from 'express'
import authRoute from './routes/auth.route.js'
import notFoundMiddleware from './middlewares/not-found.middleware.js'
import errorMiddleware from './middlewares/error.middlewares.js'

const app = express()

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/post', (req,res)=> {
	console.log(x)
	res.json({body : req.body})
})
app.use('/api/comment', (req,res)=> res.send('comment service'))
app.use('/api/like', (req,res)=> res.send('like service'))
app.use( notFoundMiddleware )

app.use( errorMiddleware )

export default app