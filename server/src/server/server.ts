import express, {Request, Response} from 'express';
import cors from 'cors';
import ServerRouter from '@src/routes/ServerRouter';

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.get('/status', (req: Request, res: Response) => {
  res.status(200).json({message: 'Server Running'});
});
export default server;
