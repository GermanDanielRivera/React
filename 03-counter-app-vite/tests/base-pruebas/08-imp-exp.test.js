import { getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => {
      
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe de retornar undefined si no existe', () => {
      
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
    })
    
    // Tarea:
    // Debe de retornar un arreglo con los héroes de DC
    // length === 3
    // toEqual al arreglo filtrando
    test('getHeroesByOwner debe de regresar héroes de DC ', () => {
      
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );


        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )
    
    })


    // Debe de retornar un arreglo con los héroes de DC
    // length === 2
    test('getHeroesByOwner debe de regresar héroes de Marvel ', () => {
      
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );


        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )
    
    })
})
