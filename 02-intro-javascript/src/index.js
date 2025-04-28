
// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'German',
    edad: 24,
    clave: '2025'
};


//const {nombre, edad, clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext = ({clave, nombre, edad, rango = 'Capitán'}) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad
    }
}

const avenger = useContext(persona);

console.log(avenger);