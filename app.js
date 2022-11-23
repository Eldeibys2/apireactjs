
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import { ServidorAPI } from './API/ServidorAPI.js'

let servidorRestaurante = new ServidorAPI()//
servidorRestaurante.despertarServidor()






