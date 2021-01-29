import { Router, Request, Response } from 'express'


const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
  
  res.json({ ok : true, menssage : 'Ok' })

})

router.get('/heroes/:id', (req: Request, res: Response) => {
  
  const id = req.params.id;

  res.json( { ok : true, menssage : id } )

})

export default router