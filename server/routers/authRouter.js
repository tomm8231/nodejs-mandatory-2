import { Router } from "express"
const router = Router()

router.post("/auth/login", (req, res) => {
    res.send({ data: "Login" })
})

router.post("/auth/signup", (req, res) => {
    res.send({ data: "Sign up" })
})

export default router