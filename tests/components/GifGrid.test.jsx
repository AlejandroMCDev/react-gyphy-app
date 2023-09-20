import { render,screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en GifGrid', () => {

    const category = "Elden Ring";

    test('debe de mostrar el loading inicialmente ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagenes de useFetchGifs', () => {

        const gifs = [
            {
                id:'ABC',
                title: 'Elden Ring',
                url: 'https://localhost.com/eldenring.jpg'
            },
            {
                id:'123',
                title: 'Goku',
                url: 'https://localhost.com/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
    
    
})
