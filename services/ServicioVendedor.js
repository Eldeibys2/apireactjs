import { modeloVendedor } from "../Models/ModeloVendedor.js";

class SevicioVendedor{

    buscarVendedor(){
        let vendedores =modeloVendedor.find()
        return vendedores
    }

    agregarVendedorEnBD(){}
}