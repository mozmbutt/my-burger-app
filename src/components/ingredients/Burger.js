import React from "react"
import './burger.css'
import Ingredient from "./ingredient/Ingredient"

function Burger({ state }) {
	const ingredients = state.ingredients

	const ingredient = (item) => {
		return [...Array(item.count)].map((e, i) => <Ingredient key={i} type={item.type} />)
	}

	let ingredientComponent = Object.values(ingredients).map(function (item, index) {
		return ingredient(item)
	});

	return (
		<div className="burger">
			<Ingredient type="upper-bun" />
			{ingredientComponent}
			{
				!ingredients.lettuce.count > 0 && !ingredients.bacon.count && !ingredients.cheese.count && !ingredients.meat.count &&
				<h1>
					No Ingredients Added
				</h1>
			}
			<Ingredient type="lower-bun" />

		</div>
	)
}

export default Burger
