import Express from "express"
const app = Express()


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})