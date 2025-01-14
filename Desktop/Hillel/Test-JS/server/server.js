const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');


const app = express();
app.use(express.json());
app.use(cors());

const uri = 'mongodb+srv://p__anastasii:3022036Np@cluster0.gmxf9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

let db, todosCollection;

client.connect()
  .then(() => {
    db = client.db('Todolist');
    todosCollection = db.collection('todo');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.get('/todos', (req, res) => {
  todosCollection.find().toArray()
    .then((todos) => res.json(todos))
    .catch(() => res.status(500).json({error: 'Cannot fetch todos'}));
});

app.post('/todos', (req, res) => {
  const {text} = req.body;
  const newTodo = {text};
  todosCollection.insertOne(newTodo)
    .then(() => res.json(newTodo))
    .catch(() => res.status(500).json({error: 'Cannot create todo'}));
});

app.put('/todos/:id', (req, res) => {
  const {id} = req.params;
  const {text} = req.body;
  todosCollection.findOneAndUpdate(
    {_id: new ObjectId(id)},
    {$set: {text}},
    {returnDocument: 'after'}
  )
    .then((result) => res.json(result.value))
    .catch(() => res.status(500).json({error: 'Cannot update todo'}));
});

app.delete('/todos/:id', (req, res) => {
  const {id} = req.params;
  todosCollection.deleteOne({_id: new ObjectId(id)})
    .then(() => res.json({message: 'Todo deleted successfully'}))
    .catch(() => res.status(500).json({error: 'Cannot delete todo'}));
});

app.listen(3000, () => console.log('Server started on port 3000'));

