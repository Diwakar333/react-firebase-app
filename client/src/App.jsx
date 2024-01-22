import { useEffect, useState, useReducer, useMemo, useContext } from "react";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { Context } from "./Context";
// import { app } from "./lib/firebase.config";
// import Navbar from "./components/Navbar";
// import Upload from "./components/Upload";



function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [count, setCount] = useState()
  const { state} = useContext(Context)


  // const handleOnChange = (e) =>
  //   dispatch({ type: "setInputs", payload: { value: e } });

  // useEffect(() =>{
  //   console.log(state)
  // }, [state.items])

  const count = useMemo(() => {
    return `you have ${state.items.length} image${
      state.items.lenght > 1 ? "s" : ""
    }`;
  }, [state.items]);

  // useEffect(() =>{
  //   app()
  // }, [])

  // useEffect(() =>{
  //   setCount()
  // }, [state.items])
  return (
    <Layout>
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
