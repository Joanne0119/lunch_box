import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Hero from './Hero';
import { expect } from 'vitest';

describe('Hero 元件', () => {
  it('未登入狀態，按鈕應該要顯示登入，並能正確顯示標題和內文', () => {

    const initialState = { user: { user: null } };

    renderWithProviders(<Hero />, { preloadedState: initialState });

    const loginBtn = screen.getByTestId('hero-login-button-1');
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toHaveAttribute('href', '/login');

    const makeBtn = screen.getByTestId('hero-make-button-2');
    expect(makeBtn).toBeInTheDocument();
    expect(makeBtn).toHaveAttribute('href', '/make');

    expect(screen.getByRole('heading', { name: /打造專屬的美味便當/i })).toBeInTheDocument();
  });

  it('登入狀態，按鈕應該要顯示開始製作，並能正確顯示標題和內文', () => {

    const mockUser = { uid: '123', name: '測試者' };
    const initialState = { user: { user: mockUser } };

    renderWithProviders(<Hero />, { preloadedState: initialState });

    const makeBtn = screen.getByTestId('hero-make-button-1');
    expect(makeBtn).toBeInTheDocument();
    expect(makeBtn).toHaveAttribute('href', '/make');

    const aboutBtn = screen.getByTestId('hero-about-button-2');
    expect(aboutBtn).toBeInTheDocument();
    expect(aboutBtn).toHaveAttribute('href', '#about');

    const expectedText = `為${mockUser.name}打造專屬的美味便當`;
    const titleRegex = new RegExp(expectedText, 'i');
    expect(screen.getByRole('heading', { name: titleRegex })).toBeInTheDocument();
  });
});