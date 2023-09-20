import { render,screen} from "@testing-library/react"
import { AddCategory } from "../src/components";
import GifExpertApp from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {
    test('debe hacer match con el snapshot ', () => {
        const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
    })

    test('Verificar que no se repitan las categorias', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole("form");

        fireEvent.input(input,{target: {value: inputValue}});
        fireEvent.submit(form);

        

        
    })
    
    
})
