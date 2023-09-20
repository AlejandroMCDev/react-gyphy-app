import { render,screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem";



describe('GifItem prueba', () => {
    const title = "Elden Ring";
    const url = "https://eldenring.com/";

    test('Debe hacer match con el snapshot ', () => {
        const {container} = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el URL y alt indicado', () => {
        render(<GifItem title={title} url={url} />);

        const {src,alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
    
    
    
})
