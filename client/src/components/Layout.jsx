import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'

const Layout = ({children, state, onChange, onSubmit, toggle}) => {
  return (
    <>
          <Navbar />
    <div className="container mt-5">
      <button className="btn btn-success float-end" onClick={() => toggle(!state.collapse)}>{state.collapse ? 'Close':'+ Add'}</button>
      <div className="clearfix mb-4"></div>
      <Upload
      inputs={state.inputs}
      isVisible={state.collapse}
      onChange={onChange}
      onSubmit={onSubmit}
      />
      {children}
      </div>
    </>
  
  )
}

export default Layout
