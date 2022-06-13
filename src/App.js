import "./App.css";
import "./style.css";
import Astronaut from "./imageInSrc.jpg";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Fahd Jerbi</h1>
      <br />
      <img src={Astronaut} alt="astronaut" width="700" />
      <br />
      <img src={"./imageInPublic.jpg"} alt="banana" width="700" />
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pjzGQfFgtXk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
