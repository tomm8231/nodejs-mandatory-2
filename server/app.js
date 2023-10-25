import Express from "express"
const app = Express()

app.use(Express.json());

import dotenv from "dotenv"
dotenv.config()


// ============== Middleware ==============

import { rateLimit } from "express-rate-limit"

//Taken from documentation page: https://www.npmjs.com/package/express-rate-limit

const allRoutesRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
});

app.use(allRoutesRateLimiter)

const authRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
});

app.use("/auth", authRateLimiter)



// ============== Routers ==============

import authRouter from "./routers/authRouter.js"
app.use(authRouter)
import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter)



// ============== Wildcard route ==============

app.all("*", (req, res) => {
    res.status(404).send({ data: `Unsupported path ${req.path}`})
})


// ============== Listening to Port ==============

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})