import {render, screen} from '@testing-library/react'

import Async from './Async'

describe('Async component', () => {
    test('renders posts if request succeeds ', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: "first post"}]
        })
        render(<Async/>)
        // find returns a promise, so waits for the async code
        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0);
    })

    
})
