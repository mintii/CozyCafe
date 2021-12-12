import logo from './logo.svg';
import './App.css';
import MenuTab from './components/MenuTab';
import Menu from './components/Menu';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div className="App">
      <section id="our_menu" class="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div class="page_title text-center mb-4">
                <h1>our menu</h1>
                <div class="single_line"></div>
              </div>
            </div>
          </div>
          <div className="row"><MenuTab/></div>
          <div className="row"><Menu/></div>
        </div>
      </section>
    </div>
  );
}

export default App;
