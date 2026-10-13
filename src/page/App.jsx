 // se importan los componenetes header y footer  y el enrutador de react-router-dom
   import Header from "../components/header.jsx";
   import Footer from "../components/footer.jsx";
  import { BrowserRouter } from "react-router-dom";

  function App() {
    return (
      <BrowserRouter>
    <div>
      <Header />
      <main className="App" />
      <Footer />
    </div>
    </BrowserRouter>
    )
  }

export default App