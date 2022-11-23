import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EsquemaVenta = new Schema({
    idvendedor:{
        required:true,
        type:Number
    },
    zona:{
        required:true,
        type:String
    },
    fecha:{
        required:true,
        type:Date
    },
    valorventa:{
        required:true,
        type:Number
    }

  });

  export const modeloVendedor=mongoose.model('vendedores')