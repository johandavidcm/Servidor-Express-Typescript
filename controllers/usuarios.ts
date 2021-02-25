import { Request, Response } from "express";

export const getUsuarios = ( req: Request, res: Response ) => {
    return res.json({
        msg: 'getUsuarios'
    });
}

export const getUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;

    return res.json({
        msg: 'getUsuarios',
        id
    });
}

export const postUsuario = ( req: Request, res: Response ) => {

    const { body } = req;

    return res.json({
        msg: 'postUsuarios',
        body
    });
}

export const putUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    return res.json({
        msg: 'putUsuarios',
        body
    });
}

export const deleteUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;

    return res.json({
        msg: 'deleteUsuarios',
        id
    });
}