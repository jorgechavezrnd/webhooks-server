import { Request, Response } from 'express';

export class GithubController {

  constructor() {}

  webhookHandler = (req: Request, res: Response) => {
    console.log('Endpoint Llamado');

    res.json('Hecho');
  };

}
