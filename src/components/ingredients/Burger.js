import React from "react"
import Bacon from "./bacon/Bacon"
import Cheese from "./cheese/Cheese"
import Lettuce from "./lettuce/Lettuce"
import LowerBun from "./lowerBun/LowerBun"
import Meat from "./meat/Meat"
import UpperBun from "./upperBun/UpperBun"
import './burger.css'

function Burger({ ingredients }) {
    let lettusComponent = [...Array(ingredients.lettuceCount)].map((e, i) => <Lettuce key={i} />)
    let baconComponent = [...Array(ingredients.baconCount)].map((e, i) => <Bacon key={i} />)
    let cheeseComponent = [...Array(ingredients.cheeseCount)].map((e, i) => <Cheese key={i} />)
    let meatComponent = [...Array(ingredients.meatCount)].map((e, i) => <Meat key={i} />)

    return (
        <div className="burger">
            <UpperBun />
            {lettusComponent}
            {baconComponent}
            {cheeseComponent}
            {meatComponent}
            {
                !ingredients.lettuceCount > 0 && !ingredients.baconCount && !ingredients.cheeseCount && !ingredients.meatCount &&
                <h1>
                    No Ingredients Added
                </h1>
            }

            <LowerBun />
        </div>
    )
}

export default Burger
