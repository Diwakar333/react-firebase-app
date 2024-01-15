import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";


const photos = [
  "https://picsum.photos/id/237/536/354",
  "https://picsum.photos/seed/picsum/536/354",
  "https://picsum.photos/id/1084/536/354?grayscale",
  "https://picsum.photos/id/1060/536/354?blur=2",
  "https://picsum.photos/458/354?image=0",
  "https://picsum.photos/536/354",
];

function App() {
  const [items, setItems] = useState(photos);
  const [collapse, isCollapse] = useState(false)

  const toggle = () => isCollapse(!collapse)

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>{collapse ? 'Close':'+ Add'}</button>
        <div className="clearfix mb-4"></div>
        <Upload isVisible={collapse}/>
        <h1>Gallery</h1>
        <div className="row">
          {items.map((photo, i) => (
            <Card key={i} src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
