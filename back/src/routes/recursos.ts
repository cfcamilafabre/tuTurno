// importamos el router con los metodos HTTP con las interfaces Request y Response para manejar la solicitud y la respuesta a las peticiones
import { Router, Request, Response } from 'express';

// Realiza las validaciones dentro de las rutas
interface IRecurso {
    id: string,
    nombre: string
}

const router = Router();