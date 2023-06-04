import { Router } from "express"
import { getTodos, addTodo ,updateTodo , deleteTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)

router.put("/update/:id", updateTodo)

router.delete("/delete/:id", deleteTodo)

export default router