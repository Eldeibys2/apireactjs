export class ControladorVenta{

        constructor(){}   


  buscarVentas(request,response){
      try {
    
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":"Aqui van los datos de la venta"
        
            })
           } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null
        
            })
           }
        }
  registrarVenta(request,response){
      let datosVendedor=request.body
    try {
    
        response.status(200).json({
            "mensaje":"exito agregando",
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