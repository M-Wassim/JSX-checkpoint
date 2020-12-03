import logo from './logo.svg';
import './App.css';
import image from './imageInSrc.jpg'
import './Style.css'
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

       <h1 className="title red">Medini Wassim  </h1>

        <br />

        <img src={image} alt="imginsrc" />

          <br/>

         <img src="/imageInPublic.jpg" alt ="imginpublic"/>

        </div>

       <video width="320" height="240" controls>

       <source src="myVideo.mp4" type="video/mp4" />

        </video>
       </div>
  );
}

export default App;
