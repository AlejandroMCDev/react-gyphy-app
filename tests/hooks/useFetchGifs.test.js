import { renderHook,waitFor} from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe regresar el estado inicial ', () => {
        const {result} = renderHook( () => useFetchGifs('Elden Ring'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })
    
    test('debe de retornar un arreglo de imagenes y el isLoading en false ', async() => {
        const {result} = renderHook( () => useFetchGifs('Elden Ring'));
        
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
            //Se puede mandar un objeto con una propiedad llamada timeout que cambia el tiempo que espera la respuesta
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy(); 
    })
})
