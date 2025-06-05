import React from 'react'
import { Link } from 'react-router';

const IngredientItem = ({ ingredient, step, index, searchInput }) => {
    let currentStep = step; 
    if (step == -1) { // 若 step 為 -1，表示搜尋結果
        // 記得依食材分類調整 currentStep for the link
        switch (ingredient.type) {
            case 'starch':
                currentStep = 1;
                break;
            case 'protein':
                currentStep = 2;
                break;
            case 'vegetable':
                currentStep = 3;
                break;
            case 'other':
                currentStep = 4;
                break;
            default:
                currentStep = 0; // Default to 0 if type is not recognized in search results
                break;
        }
    } else if (step === 0) { // If it's from "All Ingredients" tab
        // For "All Ingredients" tab, we still want to pass the correct category step to CatlogDetail
        switch (ingredient.type) {
            case 'starch':
                currentStep = 1;
                break;
            case 'protein':
                currentStep = 2;
                break;
            case 'vegetable':
                currentStep = 3;
                break;
            case 'other':
                currentStep = 4;
                break;
            default:
                currentStep = 0; // Keep 0 if type is unknown, but CatlogDetail will handle it
                break;
        }
    }



    return (
        <div> { /*食材卡片本體*/}
            <Link to={`/catlog/${ingredient.type}-${index}?tab=${step}&search=${searchInput}`}>
                <div className="card bg-base-300 lg:h-70 md:h-80 border-1 border-neutual border-opacity-30 hover:scale-102 hover:shadow-sm">
                    <figure className='px-4 py-4'>
                        <img
                            src={ingredient.image}
                            alt={ingredient.name}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{ingredient.name}</h2>
                        <p className="text-primary line-clamp-2 opacity-80" 
                            style= {
                                {
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    textOverflow: 'ellipsis',
                                    lineHeight: '1.5rem', // 設定行高
                                    maxHeight: '3rem', // 設定最大高度為兩行
                                }
                            }
                        >{ingredient.description}</p>
                    </div>
                </div>
            </Link >
        </div >
    )



}

export default IngredientItem