import { Request, Response } from "express";
import path from 'path';
import fs from 'fs';

export const getImages = async (_: Request, res: Response) =>  {
    const buffer = fs.readFileSync(path.join(__dirname, '../public', 'starlord.jpeg'))
    res.setHeader('Content-Type', 'image/jpeg');
    return res.send(buffer);
}
