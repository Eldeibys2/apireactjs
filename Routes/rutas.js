import  express  from "express";

import { ControladorVendedor } from "../Controllers/ControladorVendedor.js";
import {ControladorVenta} from "../Controllers/ControladorVenta.js";

export let controladorVenta = new ControladorVenta()
export let controladorVendedor = new ControladorVendedor()//usando el controlador
export let rutasPersonalizadas = express.Router()

rutasPersonalizadas.get('/tiendasanfe/vendedores',controladorVendedor.buscarVendedores)
rutasPersonalizadas.post('/tiendasanfe/vendedor',controladorVendedor.registrarVendedor)

rutasPersonalizadas.get('/tiendasanfe/ventas',controladorVenta.buscarVentas)
rutasPersonalizadas.get('/tiendasanfe/ventas',controladorVenta.registrarVenta)