import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

    test('useContext debe de retornar un objecto', () => {
      
        const clave = '31032001';
        const edad = 24;

        const user = usContext({clave, edad});
        
        expect( user ).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    })
    
})
