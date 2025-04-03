import React from 'react'

const Step = ({step}) => {
  return (
    <div className='w-full'>
    <ul className="steps w-full transition-all duration-800">
        <li className={`step ${step >= 1 ? "step-primary": ""}`}><p className='text-xs'>選擇澱粉</p></li>
        <li className={`step ${step >= 2 ? "step-primary": ""}`}><p className='text-xs'>選擇蛋白質</p></li>
        <li className={`step ${step >= 3 ? "step-primary": ""}`}><p className='text-xs'>選擇4樣配菜</p></li>
        <li className={`step ${step >= 4 ? "step-primary": ""}`}><p className='text-xs'>其他選項</p></li>
        <li className={`step ${step >= 5 ? "step-primary": ""}`}><p className='text-xs'>確認訂單</p></li>
    </ul>
    </div>
  )
}

export default Step
