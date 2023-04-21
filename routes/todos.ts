import express from "express";
import { Todo } from "../models/todo";
import { getClient } from "../db";
import { ObjectId } from "mongodb";

export const todoRouter = express.Router();

todoRouter.get('/todos', async (req, res) => {

    const client = await getClient(); //connects to server
    const results = await client.db()
    .collection<Todo>('todos').find().toArray();

    res.json(results); //send json results
});

todoRouter.post('/todos', async (req, res) => {
    const todo = req.body as Todo;
    const client = await getClient();
    await client.db()
    .collection<Todo>('todos')
    .insertOne(todo);
    res.status(201).json(todo)
})

todoRouter.delete('/todos/:id', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const client = await getClient();
    const result = await client.db().collection<Todo>('todos')
    .deleteOne({_id: _id});
    if(result.deletedCount === 0) {
        res.status(404).json({message: "Not Found"});
    } else {
        res.status(204).end();
    }
})

todoRouter.put('/todos/:id', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const data = req.body as Todo;
    delete data._id;
    const client = await getClient();
    const result = await client.db().collection<Todo>('todos').replaceOne({id: _id}, data);
    if (result.modifiedCount === 0) {
        res.status(404).json({message: "Not Found"});
    } else {
        data._id = _id
        res.json(data);
    }
})