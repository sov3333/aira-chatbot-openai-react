import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Chat from './Components/Chat';
import Dream from './Components/Dream';
import Craft from './Components/Craft';
import Item from './Components/Item';
import Signin from './Components/Signin';
import Account from './Components/Account';
import Protected from './Components/Protected';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        {/* In React Router v6, the exact prop is not necessary to use, but it can be useful in some cases. The exact prop is used to specify that a route should only match when the path is exactly the same as the current URL.
        In general, it's a good idea to use the exact prop whenever you have routes that share a common prefix in their paths. This can help avoid unexpected behavior and ensure that your routes are well-defined. */}
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/dream" element={<Dream />}></Route>
        <Route exact path="/craft" element={<Craft />}></Route>
        <Route path="/craft/:id/:id2" element={<Protected><Item /></Protected>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/account" element={<Protected><Account /></Protected>}></Route>
      </Routes>
      <Footer />
    </AuthContextProvider>
    </>
  );
}

export default App;
