import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import About from './About'; 

describe('About 元件', () => {
    it('應該要能渲染標題、內文和連結按鈕', () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /我們的理念與願景/i })).toBeInTheDocument();
        expect(screen.getByText(/我們致力於提供個性化的健康便當/i)).toBeInTheDocument();

        const linkButton = screen.getByRole('link', { name: /開始製作/i });
        expect(linkButton).toBeInTheDocument();
        // 驗證它的連結是否指向正確的路徑
        expect(linkButton).toHaveAttribute('href', '/make');
    });
});