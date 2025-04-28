
// Funciones en JS
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('German Rivera'));
console.log(saludar2('German Rivera'));
console.log(saludar3('Daniel Rivera'));
console.log(saludar4());


const getUser = () => ({
        uid: 'ABC123',
        username: '~TheKill4r~'
});


const user = getUser();    
console.log(user);


// Tarea
// 1.Transformar a una función de flecha
// 2.Tiene que retornar un objeto implícito
// 3.Pruebas
const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Daniel');
console.log(usuarioActivo);