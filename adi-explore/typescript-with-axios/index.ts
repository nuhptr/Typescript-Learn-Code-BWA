import axios, { AxiosResponse } from "axios"

interface Todo {
   userId: number
   id: number
   title: string
   completed: boolean
}

const fetchData = async (todoId: number) => {
   try {
      const response: AxiosResponse<Todo> = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)

      const todo = response.data
      const ID = todo.id
      const title = todo.title
      const finished = todo.completed

      console.log(`The Todo with ID: ${ID} Has a title of: ${title} Is it finished? ${finished}`)
   } catch (error) {
      if (axios.isAxiosError(error)) {
         if (error.response) console.log(`Error: ${error.response.status},  Data: ${error.response.data}`)
      }
   }
}

fetchData(1)
