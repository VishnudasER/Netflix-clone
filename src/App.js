import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Navbar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { action, originals , trending , comedy, documentaries,horror,romance } from './urls'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title ='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
