import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import { useContext } from 'react';
import {Context} from '../Context'

const Layout = ({children}) => {
  const {dispatch, state} = useContext(Context);
  const toggle = (bool) => dispatch({ type: "isCollapsed", payload: { bool } });

  return (
    <>
          <Navbar />
    <div className="container mt-5">
      <button className="btn btn-success float-end" onClick={() => toggle(!state.collapse)}>{state.collapse ? 'Close':'+ Add'}</button>
      <div className="clearfix mb-4"></div>
      <Upload
      inputs={state.inputs}
      isVisible={state.collapse}
      />
      {children}
      </div>
    </>
  
  )
}

export default Layout
