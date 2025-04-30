
// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'German',
    edad: 24,
    clave: '~TheKill4r~'
};


//const {nombre, edad, clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext = ({clave, nombre, edad, rango = 'Capitán'}) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.33232
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
