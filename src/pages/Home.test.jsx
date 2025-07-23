import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import { vi, describe, it, expect } from 'vitest';
import Home from './Home'; 

vi.mock('@splinetool/react-spline', () => ({
  default: () => {
    return <div data-testid="mock-spline"></div>;
  },
}));

describe('Home 元件', () => {

  it('應該要能正確顯示首頁的spline 3d的內容、文字和讀取圖示，並可以點擊連結到其他頁面的觸發', () => {
    
    renderWithProviders(<Home />);

    expect(screen.getByTestId('mock-spline')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /打造專屬的美味便當/i })).toBeInTheDocument();
    expect(screen.getByText(/我們的特色/i)).toBeInTheDocument();
    expect(screen.getByText(/我們的理念與願景/i)).toBeInTheDocument();
    expect(screen.getByText(/盒味盒子/i)).toBeInTheDocument();

  });

});