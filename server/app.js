import "dotenv/config"

import Express from "express"
const app = Express()
app.use(Express.json())

//https://www.npmjs.com/package/helmet
import helmet from "helmet"
app.use(helmet())

import cors from "cors"
app.use(cors({
	credentials: true,
	origin: true
}))

import session from "express-session"
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


// ============== Middleware ==============

import { rateLimit } from "express-rate-limit"

//Taken from documentation page: https://www.npmjs.com/package/express-rate-limit

const allRoutesRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

app.use(allRoutesRateLimiter)

const authRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

app.use("/auth", authRateLimiter)


const checkAuth = (req, res, next) => {
	if (req.session && req.session.userId) {
		return next()
	} else {
		return res.status(401).send({ data: "Unauthorised" })
	}
}



// ============== Routers ==============

import authFirebaseRouter from "./routers/authFirebaseRouter.js"
app.use(authFirebaseRouter)
import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter)

app.get('/protected', checkAuth, (req, res) => {
	res.status(200).send({ data: 'This is a protected route' })
  })



// ============== Wildcard route ==============

app.all("*", (req, res) => {
    res.status(404).send({ data: `Unsupported path ${req.path}`})
})


// ============== Listening to Port ==============

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})