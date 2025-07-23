import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import EndSection from './EndSection'; 

describe('EndSection 元件', () => {
    it('應該要能渲染標題、內文和連結按鈕', () => {
        render(
            <MemoryRouter>
                <EndSection />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /盒味盒子/i })).toBeInTheDocument();
        expect(screen.getByText(/多樣化的食材搭配，讓每一盒便當都合你心意，味你而生。/i)).toBeInTheDocument();
        expect(screen.getByText(/立即開始打造屬於你的專屬便當，讓每一餐都成為驚喜的旅程！/i)).toBeInTheDocument();

        const linkButton = screen.getByRole('link', { name: /開始製作/i });
        expect(linkButton).toBeInTheDocument();
        // 驗證它的連結是否指向正確的路徑
        expect(linkButton).toHaveAttribute('href', '/make');
    });
});