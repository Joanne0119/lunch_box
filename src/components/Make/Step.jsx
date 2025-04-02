import React from 'react'

const Step = () => {
  return (
    <div>
    <ul className="steps w-full">
        <li className="step step-primary"><p className='text-xs'>選擇澱粉</p></li>
        <li className="step step-primary"><p className='text-xs'>選擇蛋白質</p></li>
        <li className="step"><p className='text-xs'>選擇4樣配菜</p></li>
        <li className="step"><p className='text-xs'>其他選項</p></li>
        <li className="step"><p className='text-xs'>確認訂單</p></li>
    </ul>
    </div>
  )
}

export default Step
