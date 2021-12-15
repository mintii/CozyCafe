import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div className="App">
      <section id="our_menu" className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page_title text-center mb-4">
                <h1>Cozy Cafe</h1>
                <div className="single_line"></div>
              </div>
            </div>
          </div>
          <div className="row"><Menu/></div>
        </div>
      </section>
    </div>
  );
}

export default App;
