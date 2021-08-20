import express, { Application } from 'express';
import cors from 'cors';
import images from '../routes/images';

class Server{
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }

    // Conectar BD

    middlewares(){
        // Cors
        this.app.use(cors());
        // Lectura del body
        this.app.use(express.json());
        // Carpeta pública
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/images', images);
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        })
    }
}

export default Server;