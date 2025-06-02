import React from 'react'
import { Link } from 'react-router';

const IngredientItem = ({ ingredient, step, index, searchInput }) => {
    if (step == -1) { // 若 step 為 -1，表示搜尋結果
        // 記得依食材分類調整 step
        switch (ingredient.type) {
            case 'starch':
                step = 1;
                break;
            case 'protein':
                step = 2;
                break;
            case 'vegetable':
                step = 3;
                break;
            case 'other':
                step = 4;
                break;
            default:
                break;
        }
    }

    return (
        <div> { /*食材卡片本體*/}
            <Link to={`/catlog/${ingredient.type}-${index}?tab=${step}&search=${searchInput}`}>
                <div className="card bg-base-300 md:h-90 sm:h-96 border-1 border-neutual border-opacity-30">
                    <figure className='px-4 pt-4'>
                        <img
                            src={ingredient.image}
                            alt={ingredient.name}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{ingredient.name}</h2>
                        <p>{ingredient.description}</p>
                    </div>
                </div>
            </Link >
        </div >
    )



}

export default IngredientItem