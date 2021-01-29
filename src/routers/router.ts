import { Router, Request, Response } from 'express'
import Mysql from '../mysql/mysql';


const router = Router();

router.get('/heroes', (req: Request, res: Response) => {

  const query = `
    SELECT * FROM Heroes
  `;
  
  Mysql.execQuery(query, (err: any, heroes : Object[] ) => {
    
      if (err) {
        res.status(400).json({ ok: false, err })
      } else {

        res.json({ ok : true, menssage : 'Ok', heroes })
      }

  } )

  

})

router.get('/heroes/:id', (req: Request, res: Response) => {
  
  const id = req.params.id;

  const idScaped = Mysql.instance.connection.escape( id )

  const query = `
    SELECT * FROM Heroes WHERE id = ${  idScaped }
  `;

Mysql.execQuery(query, (err: any, heroe : Object[] ) => {
  
    if (err) {
      res.status(400).json({ ok: false, err })
    } else {

      res.json({ ok : true, menssage : 'Ok', heroe })
    }

} )

})

export default router