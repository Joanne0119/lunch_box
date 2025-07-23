import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router'; // 順便把 Router 也包進去

// 引入您的 reducers
import userReducer from '../redux/userSlice';
import orderReducer from '../redux/orderSlice';

// 建立一個客製化的 render 函式
export function renderWithProviders(
  ui,
  {
    // 可以傳入預先載入的 state，用來模擬各種情境
    preloadedState = {},
    // 自動建立一個 store
    store = configureStore({ reducer: { user: userReducer, order: orderReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    // 將 Provider 和 MemoryRouter 一起包裝
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }

  // 回傳包含 store 的 render 結果
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}