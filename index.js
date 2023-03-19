var botonPeticion = document.getElementById('peticion')
var tablaResultado = document.getElementById('tablaContenido')

botonPeticion.addEventListener('click', function(){
    fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json')
        //.then(res=>console.log(res))
        /*
        debemos convertir la respuesta a formato JSON
        json() tambien devuelve una promesa entonces tambien
        podriamos anidar el then dentro del mismo Json().then
        por orden lo haremos fuera
         */       
        .then(res=>res.json())
        //.then(resJson=>console.log(resJson))
        .then(resJson=>{
            var dataSeries = resJson['dataseries']
            for(let i=0; i<dataSeries.length; i++){
                var dia = dataSeries[i]
                tablaResultado.innerHTML += "<tr>"+
                                                "<th scope=\"row\">"+i+"</td>"+
                                                "<td>"+dia['date']+"</td>"+
                                                "<td>"+dia['weather']+"</td>"+
                                                "<td>"+dia['temp2m']['min']+"</td>"+
                                                "<td>"+dia['temp2m']['max']+"</td>"+
                                            "</tr>"
            }                               
        })
        

})