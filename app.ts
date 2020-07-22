import * as express from "express"
import * as http from "http"
import { join } from "path"
import { urlencoded } from "body-parser"
import * as methodOverride from "method-override"

import db from "./model/db"
import user from "./routes/user"

const app = express()

//Connection base de donnée
db.connect(err => {
    if(err) return console.log(err)
    console.log("Database connecté avec succès")
})

//Nos routes
app.use(express.static(join(__dirname, "/views")))
    .use(urlencoded({ extended: false }))
    .use(methodOverride('_method'))
    .get("/", (req: express.Request, res: express.Response) => res.sendFile(join(__dirname, "./views/index.html")))
    .use("/", user)

const PORT = 4000
const server = http.createServer(app)
server.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`))
