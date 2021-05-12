import {request, Request, Response, Router} from 'express';
const router: Router = Router();

router.get('/home', (req: Request, res: Response) => {
  res.status(200).json({msg: 'Home page'});
});
router.get('/account', (req: Request, res: Response) => {
  res.status(200).json({msg: 'Account Page'});
});
router.get('/marketplace', (req: Request, res: Response) => {
  res.status(200).json({msg: 'MarketPlace'});
});

const ServerRouter = router;
export default ServerRouter;
