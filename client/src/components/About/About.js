import { useParams} from "react-router-dom";

const About = () => {
  console.log(useParams());
  return (
    <main className="main-container">
      <h1>About {useParams().name} page</h1>
    </main>
)};

export default About;