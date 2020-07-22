import { createConnection } from "mysql"

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js"
})

export default db