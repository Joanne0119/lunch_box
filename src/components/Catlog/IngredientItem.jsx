import React from 'react'
import { Link } from 'react-router';

const IngredientItem = ({ ingredient, index }) => {
    return (
        <div> { /*食材卡片本體*/ }
            <Link to={`/catlog/${ingredient.type}-${index+1}`}>
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
                    </div>
                </div>
            </Link >
        </div >
    )

}

export default IngredientItem