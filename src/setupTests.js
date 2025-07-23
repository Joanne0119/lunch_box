import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

// 將 @testing-library/jest-dom 的斷言功能擴展到 expect 上
expect.extend(matchers);

// 在每個測試案例結束後，自動清理 DOM，避免測試之間互相影響
afterEach(() => {
  cleanup();
});

// 建立一個假的 (Mock) IntersectionObserver
const mockIntersectionObserver = vi.fn(); //建立了一個 Vitest 的模擬函式
mockIntersectionObserver.mockReturnValue({
  observe: () => null,    // motion 會呼叫這些方法，我們提供空實作即可
  unobserve: () => null,
  disconnect: () => null
});

// 讓 window 物件擁有這個假的 IntersectionObserver
window.IntersectionObserver = mockIntersectionObserver;