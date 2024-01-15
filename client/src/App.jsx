import Card from "./components/Card";
import Navbar from "./components/Navbar";

const photos =[
'https://picsum.photos/id/237/536/354' ,
'https://picsum.photos/seed/picsum/536/354',
'https://picsum.photos/id/1084/536/354?grayscale',
'https://picsum.photos/id/1060/536/354?blur=2',
'https://picsum.photos/458/354?image=0',
'https://picsum.photos/536/354'
]

function App() {
  return (
    <>
     <Navbar/>
      <div className="container text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
          {photos.map((photo, i) =><Card key={i} src={photo}/>
         )}
        
        </div>
      </div>
    </>
  );
}

export default App;
