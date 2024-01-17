import { useEffect, useState, useReducer  } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";


const photos = [
 
];

const initialState={
  items: photos,
  count: photos.length,
  inputs: {title:null, file:null, path: null},
  collapse: false
}

const handleOnChange = (state, e) => {
  if(e.target.name === 'file') {
    return{...state.inputs, files:e.target.files[0], path:URL.createObjectURL( e.target.files[0])}
    
  }else{
    return{...state.inputs, title:e.target.value}
  }
}

function reducer(state, action) {
  switch(action.type) {
    case 'setItem':
      return{
        ...state,
        items:[state.inputs, ...state.items]
      }
      case "setInputs":
        return{
          ...state,
          inputs:handleOnChange(state, action.payload.value)
        }
        case "isCollapsed":
          return{
            ...state,
            collapse: action.payload.bool
          }
          default: return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState()
 
  const toggle = (bool) => dispatch({type:"isCollapsed", payload:{bool}})

  const handleOnChange = (e) => dispatch({type: 'setInputs', payload:{value: e}})
  const handleOnSubmit = (e) => {
    e.preventDefault()
    // setItems([inputs.path, ...items]);
    dispatch({type:'setItem', payload:{path:state.inputs}})
    // setInputs({title:null, file:null, path: null})
    toggle(!state.collapse)
  }

  // useEffect(() =>{
  //   console.log(state)
  // }, [state.items])

  useEffect(() =>{
    setCount(`you have ${state.items.length} image${state.items.lenght > 1 ? 's' : ''}`)
  }, [state.items])
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={() => toggle(!state.collapse)}>{state.collapse ? 'Close':'+ Add'}</button>
        <div className="clearfix mb-4"></div>
        <Upload 
        inputs={state.inputs}
        isVisible={state.collapse}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        />
        {count}
        <h1>Gallery</h1>
        <div className="row">
          {state.items.map((photo, i) => (
            <Card key={i} src={photo.path} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
