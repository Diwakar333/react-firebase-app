import { useEffect, useState, useReducer, useMemo } from "react";
import Card from "./components/Card";
import Layout from "./components/Layout";
// import Navbar from "./components/Navbar";
// import Upload from "./components/Upload";

const photos = [];

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  collapse: false,
};

const handleOnChange = (state, e) => {
  if (e.target.name === "file") {
    return {
      ...state.inputs,
      files: e.target.files[0],
      path: URL.createObjectURL(e.target.files[0]),
    };
  } else {
    return { ...state.inputs, title: e.target.value };
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items: [state.inputs, ...state.items],
        count: state.items.length + 1,
        inputs: { title: null, file: null, path: null },
      };
    case "setInputs":
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value),
      };
    case "isCollapsed":
      return {
        ...state,
        collapse: action.payload.bool,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [count, setCount] = useState()

  const toggle = (bool) => dispatch({ type: "isCollapsed", payload: { bool } });

  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setItems([inputs.path, ...items]);
    dispatch({ type: "setItem", payload: { path: state.inputs } });
    // setInputs({title:null, file:null, path: null})
    toggle(!state.collapse);
  };

  // useEffect(() =>{
  //   console.log(state)
  // }, [state.items])

  const count = useMemo(() => {
    return `you have ${state.items.length} image${
      state.items.lenght > 1 ? "s" : ""
    }`;
  }, [state.items]);

  // useEffect(() =>{
  //   setCount()
  // }, [state.items])
  return (
    <Layout
      state={state}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      toggle={toggle}
    >
      <h1 className="text-center">Gallery</h1>
      {count}
      <div className="row">
        {state.items.map((item, index) => (
          <Card key={index} src={index} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
