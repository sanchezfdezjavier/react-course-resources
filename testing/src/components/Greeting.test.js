import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting component', () => {
    test('renders hello world as a text', () => {
        // Setup the 3 A's -> Arrage, Act, Assert
    
        // Arrage
        render(<Greeting/>);
    
        // Act
        // in this case nothing...
    
        // Assert
        const helloWorldElement = screen.getByText(/Hello world!/i);
        expect(helloWorldElement).toBeInTheDocument();
    })
})


