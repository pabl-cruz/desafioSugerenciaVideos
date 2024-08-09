//funcion iife autoejectutable
let funcionIife = (()=>{

    //funcion privada, trae id y url de video 
    let setVideo = (url, id) => {
        //coloca atributo url a src
        document.getElementById(id).setAttribute("src", url)
    }
   
    //funcion publica, devolver en llave u objeto para acceder y modificar datos
    return{
        setVideo 
    }
})()

export default funcionIife