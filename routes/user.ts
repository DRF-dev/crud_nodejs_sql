import { Router } from "express"
import { addUser, deleteUser, modifyUser, viewAll, viewOne } from "../controllers/userController"

const router = Router()

router.post("/add", addUser)
    .delete('/remove', deleteUser)
    .put('/modify', modifyUser)
    .get('/viewall', viewAll)
    .post('/viewone', viewOne)

export default router