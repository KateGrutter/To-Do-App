import { ObjectId } from "mongodb";

export interface Todo {
  _id?: ObjectId;
  task: string;
  note?: string;
  completed: boolean;
  priority?: number;
  dueDate: number;
  created: number;
}
