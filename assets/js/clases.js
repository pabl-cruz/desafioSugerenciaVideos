//importar funcion iife de modulo iife 
import funcionIife from "./iife.js"

//clases

class Multimedia {
    #url
    constructor(url){
        this.#url = url 
    }

    get url(){
        return this.#url
    }

    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video'
    }
    
}

class Reproductor extends Multimedia{
    #id 
    constructor(url, id){
        super(url)
        this.#id = id;  
    }

    playMultimedia(){
        //llama a funcion publica de tener enlace de video e id asociada a iframe
        funcionIife.setVideo(this.url, this.#id)
    }
    setInicio(tiempo){
        //funcion para añadir parametro de tiempo de inicio al final de url
        let nuevoUrl = `${this.url}&amp;start=${tiempo}`
        //ejecuta funcion setvideo de nuevo con url actualizada
        funcionIife.setVideo(nuevoUrl, this.#id)
    }
}

export {
    Multimedia,
    Reproductor
}