import { Request, Response } from "express"
import db from "../model/db"

const addUser = (req: Request, res: Response) => {
    const { name, age, mail } = req.body
    let query = "INSERT INTO `test` (name, age, mail) VALUE ('" + name + "', '" + age + "', '" + mail + "')"
    db.query(query, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("User enrengistré avec succès")
        }
    })
    return res.redirect("/")
}

const deleteUser = (req: Request, res: Response) => {
    const { name } = req.body
    let query = "DELETE FROM `test` WHERE `name`='" + name + "'"
    db.query(query, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("User supprimé avec succès")
        }
    })
    return res.redirect("/")
}

const modifyUser = (req: Request, res: Response) => {
    const { id, name, age, mail } = req.body
    let query = "UPDATE test SET name='" + name + "', age='" + age + "', mail='" + mail + "' WHERE id='"+ id + "'"
    db.query(query, err => {
        if(err) {
            console.log(err)
        } else {
            console.log("Élément modifié avec succès")
        }
    })
    return res.redirect('/')
} 

const viewAll = (req: Request, res: Response) => {
    let query = "SELECT * FROM `test`"
    db.query(query, (err, data) => {
        try {
            res.status(200).render('view.ejs', { data: data })
            return console.log("Redirect to view all")
        } catch (error) {
            console.log(error)
            console.log(err)
            return res.redirect('/')
        }
    })
}

const viewOne = (req: Request, res: Response) => {
    const { id } = req.body
    let query = "SELECT * FROM test WHERE id="+ id
    db.query(query, (err, data) => {
        try {
            console.log("Redirect to view one")
            return res.status(200).render('view.ejs', { data: data })
        } catch (error) {
            console.log("Erreur au moment de l'enrengistrement", err)
            console.log("Erreur au moment de la redirection", error)
            return res.status(500).redirect('/')
        }
    })
}

export { addUser, deleteUser, modifyUser, viewAll, viewOne }