import React from "react"
import Controller from "./ingredient-control/Controller"
import './build-control.css'

function BuildControls({ state, dispatch }) {
    return (
        <div className="section-controls">
            <h4>
                Current Price: {state?.price} $
            </h4>
            <Controller
                name="Lettuce"
                price="10"
                increamentItem={() => dispatch('ADD_LETTUCE')}
                decreamentItem={() => dispatch('REMOVE_LETTUCE')}
                itemCount={state.lettuceCount}
            />
            <Controller
                name="Bacon"
                price="20"
                increamentItem={() => dispatch('ADD_BACON')}
                decreamentItem={() => dispatch('REMOVE_BACON')}
                itemCount={state.baconCount}
            />
            <Controller
                name="Cheese"
                price="5"
                increamentItem={() => dispatch('ADD_CHEESE')}
                decreamentItem={() => dispatch('REMOVE_CHEESE')}
                itemCount={state.cheeseCount}
            />
            <Controller
                name="Meat"
                price="25"
                increamentItem={() => dispatch('ADD_MEAT')}
                decreamentItem={() => dispatch('REMOVE_MEAT')}
                itemCount={state.meatCount}
            />
        </div>
    )
}

export default BuildControls
