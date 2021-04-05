import "./App.scss";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

//animations
import pageEnter from "./animations/pageEnter";
import pageExit from "./animations/pageExit";

//pages
import About from "./pages/About";
import Home from "./pages/Home";
//components
import Header from "./components/Header";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About }
];

function App() {
  return (
    <>
      <Header />
      <div className="container">
        {routes.map(({ path, name, Component }) => (
          <Route key={name} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                unmountOnExit
                onExit={pageExit}
                onEnter={pageEnter}
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
