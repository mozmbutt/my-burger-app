import { useReducer } from 'react';
import './home.css';
import BuildControls from '../../components/controlles/BuildControls';
import Burger from '../../components/ingredients/Burger';

function Home() {
  const initialState = {
    ingredients: {
      lettuce: {
        type: 'lettuce',
        count: 0,
        price: 10
      },
      bacon: {
        type: 'bacon',
        count: 0,
        price: 20
      },
      cheese: {
        type: 'cheese',
        count: 0,
        price: 5
      },
      meat: {
        type: 'meat',
        count: 0,
        price: 25
      }
    },
    price: 0
  }

  const add_ingredient = (state, item) => {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [item]: {
          ...state.ingredients[item],
          count: state.ingredients[item].count + 1,
        }
      },
      price: state.price + state.ingredients[item].price
    }
  }

  const remove_ingredient = (state, item) => {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [item]: {
          ...state.ingredients[item],
          count: state.ingredients[item].count - 1,
        }
      },
      price: state.price - state.ingredients[item].price
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_LETTUCE':
        return add_ingredient(state, 'lettuce')

      case 'REMOVE_LETTUCE':
        return remove_ingredient(state, 'lettuce')

      case 'ADD_BACON':
        return add_ingredient(state, 'bacon')

      case 'REMOVE_BACON':
        return remove_ingredient(state, 'bacon')

      case 'ADD_CHEESE':
        return add_ingredient(state, 'cheese')

      case 'REMOVE_CHEESE':
        return remove_ingredient(state, 'cheese')

      case 'ADD_MEAT':
        return add_ingredient(state, 'meat')

      case 'REMOVE_MEAT':
        return remove_ingredient(state, 'meat')

      default:
        return {
          ...state
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="Home">
      <Burger state={state} />
      <BuildControls
        state={state}
        dispatch={(type) => dispatch({ type: type })}
      />
    </div>
  );
}

export default Home;
