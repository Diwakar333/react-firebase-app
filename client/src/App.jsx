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

function reducer(state, action) {
  switch(action.type) {
    case 'setItem':
      return{
        ...state,
        items:[action.payload.path, ...state.items]
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState()
  const [inputs, setInputs] = useState({title:null, file:null, path: null})
  const [items, setItems] = useState(photos);
  const [collapse, isCollapse] = useState(false);
  const toggle = () => isCollapse(!collapse)

  const handleChange = (e) => {
    if(e.target.name === 'file') {
      setInputs({...inputs, files:e.target.files[0], path:URL.createObjectURL(e.target.files[0])})
      
    }else{
      setInputs({...inputs, title:e.target.value})
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    // setItems([inputs.path, ...items]);
    dispatch({type:'setItem', payload:{path:inputs}})
    setInputs({title:null, file:null, path: null})
    isCollapse(false)
  }

  useEffect(() =>{
    console.log(state)
  }, [state.items])

  useEffect(() =>{
    setCount(`you have ${items.length} image${items.lenght > 1 ? 's' : ''}`)
  })
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>{collapse ? 'Close':'+ Add'}</button>
        <div className="clearfix mb-4"></div>
        <Upload 
        inputs={inputs}
        isVisible={collapse}
        onChange={handleChange}
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
