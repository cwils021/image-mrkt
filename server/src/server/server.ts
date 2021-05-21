import express, {Request, Response} from 'express';
import cors from 'cors';
import ServerRouter from '@src/routes/ServerRouter';

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.get('/status', (req: Request, res: Response) => {
  res
    .status(200)
    // eslint-disable-next-line no-process-env
    .json({message: `Server Running, DB String => ${process.env.TEST_DB}`});
});
server.use('/', ServerRouter);
export default server;
