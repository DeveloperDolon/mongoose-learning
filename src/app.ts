import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './appp/modules/student/student.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  console.log(a, 'something-new');

  res.send('Hello World!');
});

export default app;
