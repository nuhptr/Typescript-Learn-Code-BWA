import express from "express"

const app = express()
const port = 8080

app.get("/", (request: express.Request, response: express.Response) => {
   response.send("Hello, Typescript Express!")
})

app.listen(port, () => console.log(`Server started at http://localhost:${port}`))
