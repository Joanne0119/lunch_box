import React from 'react'

const IngredientItem = ({ ingredient }) => {
    return (
        <div className="">
            { /*食材卡片本體*/}
            <div className="card bg-base-300 md:h-90 sm:h-96 border-1 border-neutual border-opacity-30">
                <figure className='px-4 pt-4'>
                    <img
                        src={ingredient.image}
                        alt={ingredient.name} 
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{ingredient.name} </h2>
                    <p>{ingredient.description}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default IngredientItem