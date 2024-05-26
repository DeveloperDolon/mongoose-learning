import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import globalErrorHandler from './appp/middlewares/globalErrorHandler';
import notFound from './appp/middlewares/notFound';
import router from './appp/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  console.log(a, 'something-new');

  res.send('Hello World!');
});

app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
