import './App.css';
import {Col,Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, useHistory, Switch } from 'react-router-dom'
import Footer  from "./Components/Footer/Footer";
import RightMenu from './Components/RightMenu/RightMenu';

const Routing = ()=>{
  return(
    <Switch>
      <Route path="/" exact>
        {/* main menu */}
      </Route>
      <Route path="/service">
        {/* Service */}
      </Route>
      <Route path="/edu">
        {/* education */}
      </Route>
      <Route path="/portfolio">
        {/* portfolio */}
      </Route>
      <Route path="blog">
        {/* blog */}
      </Route>
      <Route path="/contact">
        {/* contact */}
      </Route>
    </Switch>
  )
}
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row> 
          <Col md={3}>
            {/* Left Sidebar */}
          </Col>
          <Col md={8}>
            {/* Main menu */}
            <BrowserRouter>
              <Routing></Routing>
            </BrowserRouter>
            <Footer></Footer>
          </Col>
          <Col md={1}>
            {/* Right menu */}
            <BrowserRouter>
              <RightMenu/>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
