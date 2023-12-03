import { Request, Response } from "express"

import IController from "./InterfaceController"
import TodoServices from "../services/TodoServices"

class TodoController implements IController {
   index = async function (req: Request, res: Response): Promise<Response> {
      const service: TodoServices = new TodoServices(req)
      const todos = await service.getAll()

      return res.send({ data: todos, message: `Get All Todo id user ${service.credential.id}` })
   }

   create = async function (req: Request, res: Response): Promise<Response> {
      const service: TodoServices = new TodoServices(req)
      const todo = await service.store()

      return res.send({ data: todo, message: "Todo Created" })
   }

   show = async function (req: Request, res: Response): Promise<Response> {
      const service: TodoServices = new TodoServices(req)
      const todo = await service.getOne()

      return res.send({ data: todo, message: `Success Get Data` })
   }

   update = async function (req: Request, res: Response): Promise<Response> {
      const service: TodoServices = new TodoServices(req)
      const todo = await service.update()

      return res.send({ data: todo, message: `todo update` })
   }

   delete = async function (req: Request, res: Response): Promise<Response> {
      const service: TodoServices = new TodoServices(req)
      const todo = await service.delete()

      return res.send({ data: todo, message: "todo deleted" })
   }
}

export default new TodoController()
