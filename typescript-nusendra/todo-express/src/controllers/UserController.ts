import { Request, Response } from "express"
import IController from "./InterfaceController"

let data: any[] = [
   { id: 1, name: "adi" },
   { id: 2, name: "budi" },
   { id: 3, name: "Cici" },
   { id: 4, name: "Didi" },
]

// Controllers
class UserController implements IController {
   index(req: Request, res: Response): Response {
      return res.send(data)
   }

   create(req: Request, res: Response): Response {
      const { id, name } = req?.body

      data.push({ id, name })

      return res.send(`success created ${name}`)
   }

   show(req: Request, res: Response): Response {
      const { id } = req.params

      let person = data.find((item) => item.id == id)

      return res.send(person)
   }

   update(req: Request, res: Response): Response {
      const { id } = req?.params
      const { name } = req?.body

      let person = data.find((item) => item.id == id)
      person.name = name

      return res.send(`update ${id} berhasil`)
   }

   delete(req: Request, res: Response): Response {
      const { id } = req.params
      let people = data.filter((item) => item.id != id)

      return res.send(people)
   }
}

// TODO: setiap selesai membuat
export default new UserController()
