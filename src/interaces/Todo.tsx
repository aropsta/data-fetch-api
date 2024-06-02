export interface jsonTodo {
  todos: Todo[]
  total: number
  skip: number
  limit: number
}

export default interface Todo {
  id?: number
  todo?: string
  completed?: boolean
  userId?: number
}
