import { render, screen } from '@testing-library/react';
import HomeSpline from './HomeSpline';
import { describe, vi } from 'vitest'; // 引入 vitest 的 mock 工具

// 在所有測試之前，模擬 @splinetool/react-spline 這個模組
vi.mock('@splinetool/react-spline', () => ({
  // 當程式碼 import Spline from '...' 時，
  // 實際上會拿到我們定義的假元件
  default: () => {
    // 回傳一個簡單的 div，並加上 data-testid 以便查詢
    return <div data-testid="mock-spline"></div>;
  },
}));

describe('HomeSpline 元件', () => {
  it('應該要能正確顯示spline 3d的內容', () => {
    render(<HomeSpline />);
    expect(screen.getByTestId('mock-spline')).toBeInTheDocument();
  });
});
