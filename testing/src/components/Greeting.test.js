import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

    test('renders by default Its good to see you', () => {
        render(<Greeting/>)

        const itsGoodElement = screen.getByText(/It's good to see you/i)
        expect(itsGoodElement).toBeInTheDocument();
    })

    test('renders changed after button pressed', () => {
        render(<Greeting/>)

        const button = screen.getByRole('button');
        userEvent.click(button)


        const changedElement = screen.getByText(/Changed/i)
        expect(changedElement).toBeInTheDocument();
    })

    test('not renders Its good to see you after clicking the button', () => {
        render(<Greeting/>)

        const button = screen.getByRole('button');
        userEvent.click(button)


        const changedElement = screen.queryByText(/It's good to see you/i)
        expect(changedElement).toBeNull()
    })
    
})


