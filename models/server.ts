import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors';

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
        // definir rutas
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
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        })
    }
}

export default Server;