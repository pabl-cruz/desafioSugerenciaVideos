//imports de modulos
import funcionIife from "./iife.js"

import { Multimedia, Reproductor } from "./clases.js"
    
    //instancias 
    const pelicula = new Reproductor('https://www.youtube.com/embed/XeXVJrPYVGU?si=-niMC8IAapNh1FaX', 'peliculas')
    const serie = new Reproductor('https://www.youtube.com/embed/EnnypDOxC9M?si=d745As81xZrQm2cR', 'series')
    const musica = new Reproductor('https://www.youtube.com/embed/cRqWd3tlTC4?si=cmMhjbdwNHo9Vf_8', 'musica')

    //funcion de traer video a html
    musica.playMultimedia()
    serie.playMultimedia()
    pelicula.playMultimedia()

    //definir cuando en su duracion en segundos, inicia el video
    pelicula.setInicio(30);
    serie.setInicio(1)
    musica.setInicio(0);
    