import { render, screen } from '@testing-library/react';
import LoadingScreen from './LoadingScreen'; // 引入您要測試的元件

// 'describe' 是一個測試群組，把相關的測試包在一起
describe('LoadingScreen 元件', () => {
  
  // 'it' 是一個獨立的測試案例，描述這個測試要做什麼
  it('應該要能正確顯示 "Loading..." 文字和讀取圖示', () => {
    
    // 1. Arrange (安排): 渲染元件 
    // render() 會在 JSDOM (一個模擬的瀏覽器環境) 中渲染您的元件
    render(<LoadingScreen />);

    // 2. Act (操作): 這個案例很單純，沒有使用者操作。

    // 3. Assert (斷言): 驗證畫面上是不是真的有我們預期的東西
    
    // `screen` 是 @testing-library/react 提供的好用工具，
    // 可以用來查詢渲染出來的 DOM。
    
    // 檢查畫面上是不是有 "Loading..." 這段文字
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument(); // 預期這個元素存在於文件中

    // 也可以檢查讀取圖示是否存在 (透過它的 class name)
    const spinner = document.querySelector('.loading-spinner');
    expect(spinner).toBeInTheDocument(); // 預期讀取圖示也存在
  });

});