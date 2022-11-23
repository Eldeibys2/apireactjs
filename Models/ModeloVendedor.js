import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EsquemaVendedor = new Schema({
    nombre:{
        required:true,
        type:String
    },
    correo:{
        required:true,
        type:String
    },
    totalcomision:{
        required:true,
        type:Number
    }
  });

  export const modeloVendedor=mongoose.model('vendedores')