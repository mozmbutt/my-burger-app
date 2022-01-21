import { useReducer } from 'react';
import './App.css';
import BuildControls from './components/controlles/BuildControls';
import Burger from './components/ingredients/Burger';
import Navbar from './components/navbar/Navbar';

function App() {
  const initialState = {
    lettuceCount: 0,
    baconCount: 0,
    cheeseCount: 0,
    meatCount: 0,
    price: 0
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_LETTUCE':
        return {
          ...state,
          lettuceCount: state.lettuceCount + 1,
          price: state.price + 10
        }

      case 'REMOVE_LETTUCE':
        return {
          ...state,
          lettuceCount: state.lettuceCount - 1,
          price: state.price - 10
        }

      case 'ADD_BACON':
        return {
          ...state,
          baconCount: state.baconCount + 1,
          price: state.price + 20
        }

      case 'REMOVE_BACON':
        return {
          ...state,
          baconCount: state.baconCount - 1,
          price: state.price - 20
        }

      case 'ADD_CHEESE':
        return {
          ...state,
          cheeseCount: state.cheeseCount + 1,
          price: state.price + 5
        }

      case 'REMOVE_CHEESE':
        return {
          ...state,
          cheeseCount: state.cheeseCount - 1,
          price: state.price - 5
        }

      case 'ADD_MEAT':
        return {
          ...state,
          meatCount: state.meatCount + 1,
          price: state.price + 25
        }

      case 'REMOVE_MEAT':
        return {
          ...state,
          meatCount: state.meatCount - 1,
          price: state.price - 25
        }

      default:
        return {
          ...state
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Navbar />
      <Burger ingredients={state} />
      <BuildControls
        state={state}
        dispatch={(type) => dispatch({ type: type })}
      />
    </div>
  );
}

export default App;
