import { render, screen } from '@testing-library/react'
import { GlobalStyle } from '../../../components/layout/Global';

describe('Global', () => {
    it("should have global style", () => {
        render(<GlobalStyle />);
        expect(document.head).toMatchSnapshot();
    });
})