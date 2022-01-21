import React from "react"
import Controller from "./ingredient-control/Controller"
import './build-control.css'

function BuildControls({ state, dispatch }) {
    const ingredients = state.ingredients
    return (
        <div className="section-controls">
            <h4>
                Current Price: {state.price} $
            </h4>
            <Controller
                name="Lettuce"
                price={ingredients.lettuce.price}
                increamentItem={() => dispatch('ADD_LETTUCE')}
                decreamentItem={() => dispatch('REMOVE_LETTUCE')}
                itemCount={ingredients.lettuce.count}
            />
            <Controller
                name="Bacon"
                price={ingredients.bacon.price}
                increamentItem={() => dispatch('ADD_BACON')}
                decreamentItem={() => dispatch('REMOVE_BACON')}
                itemCount={ingredients.bacon.count}
            />
            <Controller
                name="Cheese"
                price={ingredients.cheese.price}
                increamentItem={() => dispatch('ADD_CHEESE')}
                decreamentItem={() => dispatch('REMOVE_CHEESE')}
                itemCount={ingredients.cheese.count}
            />
            <Controller
                name="Meat"
                price={ingredients.meat.price}
                increamentItem={() => dispatch('ADD_MEAT')}
                decreamentItem={() => dispatch('REMOVE_MEAT')}
                itemCount={ingredients.meat.count}
            />
        </div>
    )
}

export default BuildControls
