import React from 'react'

const OrderDetails = ({ isOpen, setIsOpen, selectedIngredients }) => {

  return (
    <>
      {/* 手機版的展開按鈕 */}
      <div
        className={`fixed bottom-5 right-5 z-50 p-2 rounded-lg btn border-base-300 shadow-lg cursor-pointer transition-all duration-300
        ${isOpen ? "right-60" : "right-3"}
        md:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? ">"  :  "<"}
      </div>

      {/* 訂單詳情區塊 */}
      <div
        className={`
          fixed bottom-5 right-5 min-h-[360px] max-h-[420px] w-62 bg-base-100 border-base-300 border-2 text-base-content shadow-3xl rounded-lg p-4 flex flex-col justify-between
          transition-transform duration-500 transform 
          ${isOpen ? "translate-x-0 pl-10" : "translate-x-[110%] pl-5"}
          md:translate-x-0 md:fixed md:right-5 md:bottom-20 md:w-1/4 md:max-h-[420px]
        `}
      >
        <h2 className="text-lg font-semibold">便當內容</h2>
        <div className="bg-base-200 p-4 rounded-md">
          <img src="/assets/orderImage/orderBentonLight.png" className="w-full" />
        </div>
        <p className="text-sm mt-2">目前已選</p>

        {/* 動態顯示已選食材 */}
        <ul className="text-sm">
        {Object.keys(selectedIngredients)
        .sort((a, b) => Number(a.replace("step", "")) - Number(b.replace("step", "")))
        .map((step) => (
            selectedIngredients[step].length > 0 && (
              <div key={step} className="px-2">
                <ul>
                  {selectedIngredients[step].map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </ul>
      </div>
    </>
  );
}

export default OrderDetails 
