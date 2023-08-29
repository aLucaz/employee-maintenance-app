import express from 'express'

const app = express()

app.get("/", (req, res) => {
    console.log("base.")
})

app.listen(8080, () => {
    console.log(` Server is running at ${8080} 🚀`)
})
