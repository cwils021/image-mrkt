import {request, Request, Response, Router} from 'express';
import mongoose from 'mongoose';
import Users from '@src/models/users';

const router: Router = Router();

router.post('/', () => async (req: Request, res: Response) => {
  try {
    const testUser = new Users({
      username: 'testUser',
      balance: 100,
      imageLinks: [''],
    });
    await testUser.save();
    res.status(201).json({testUser});
  } catch (error) {
    res.status(409).json({err: 'could not post to DB'});
  }
});

router.get('/:username/home', () => async (req: Request, res: Response) => {
  const {username} = req.params;
  console.log(username);
  console.log(mongoose.connection.readyState);
  try {
    const user = await Users.find({username});

    res.status(200).json({message: 'test'});
  } catch (error) {
    res.status(404).json({err: error});
  }
});
router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await Users.find({});
    res.status(200).json({users});
  } catch (error) {
    res.status(404);
  }
});
router.get('/marketplace', (req: Request, res: Response) => {
  res.status(200).json({msg: 'MarketPlace'});
});

const ServerRouter = router;
export default ServerRouter;
