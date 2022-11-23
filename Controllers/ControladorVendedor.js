export class ControladorVendedor{


constructor(){}

buscarVendedores(request,response){
   try {
    
    response.status(200).json({
        "mensaje":"exito en la consulta",
        "datos":"Aqui van los datos del vendedor"

    })
   } catch (error) {
    response.status(400).json({
        "mensaje":"error en la consulta "+error,
        "datos":null

    })
   }
   
   
   
}
registrarVendedor(request,response){
    let datosVendedor=request.body
    try {
    
        response.status(200).json({
            "mensaje":"exito al agregar",
            "datos":null
    
        })
       } catch (error) {
        response.status(400).json({
            "mensaje":"error al agregar "+error,
            "datos":null
    
        })
       }
}

}