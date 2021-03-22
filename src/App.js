import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {

  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact={true}>
                <Home/>
            </Route>
        </div>
            <Route path="/courses">
                <CourseManager/>
            </Route>
      </BrowserRouter>

  );
}

export default App;