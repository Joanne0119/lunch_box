import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Feature from './Feature';

describe('Feature 元件', () => {
  it('未登入狀態，按鈕應該要顯示登入，並能正確顯示標題和內文', () => {

    const initialState = { user: { user: null } };

    renderWithProviders(<Feature />, { preloadedState: initialState });

    const loginBtn = screen.getByTestId('feature-login-button');
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toHaveAttribute('href', '/login');
  });

  it('登入狀態，按鈕應該要顯示開始製作，並能正確顯示標題和內文', () => {

    const mockUser = { uid: '123', name: '測試者' };
    const initialState = { user: { user: mockUser } };

    renderWithProviders(<Feature />, { preloadedState: initialState });

    const makeBtn = screen.getByTestId('feature-make-button');
    expect(makeBtn).toBeInTheDocument();
    expect(makeBtn).toHaveAttribute('href', '/make');
  });
});