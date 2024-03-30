import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello Netapp</h1>');
});

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default server;
