import logo from './logo.svg';
import './App.css';
import About from "./about";
import Contact from "./contact";
import Todos from "./todos";


function App() {
  return (
    <>
        {/*<Link to="/todos" className={'border bg-blue-500'}>Todos</Link>*/}
        {/*<Link to="/about">About</Link>*/}

        {/*<Routes>*/}
        {/*    <Route path="todos" element={<Todos />} />*/}
        {/*    <Route path="about" element={<About />} />*/}
        {/*</Routes>*/}

      <Todos />


    </>
  );
}

export default App;
