import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        const element = screen.getByTestId('home')
        expect(element).toBeInTheDocument()
    })
})