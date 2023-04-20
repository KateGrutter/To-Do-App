export interface Todo {
  _id?: string;
  task: string;
  note?: string;
  completed: boolean;
  priority?: number;
  dueDate: number;
  created: number;
}
