import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import Navigation from "./components/nav/NormalMenu/NormalMenu";
import MobileNav from "./components/nav/MobileMenu/MobileMenu";
import ArticleOne from "./components/ArticleOne";
import ArticleTwo from "./components/ArticleTwo";
import ArticleThree from "./components/ArticleThree";
import Popup from "reactjs-popup";
import BurgerIcon from "./components/BurgerIcon";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "./sass/App.scss";
import "./sass/style.scss";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const contentStyle = {
  background: "black",
  width: "100%",
  height: "100%",
  border: "none",
  position: "fixed",

  // position: "fixed",

  // bottom: "10%",
  // opacity: "0",
};

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ScrollToTop>
          <div className="App">
            <Popup
              modal
              contentStyle={contentStyle}
              closeOnDocumentClick={true}
              trigger={(open) => <BurgerIcon open={open} />}
            >
              {(close) => <MobileNav close={close} />}
            </Popup>

            <Navigation />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/articles-list" exact component={ArticlesListPage} />
              {/* <Route path="/article/:name" exact component={ArticlePage} /> */}
              <Route path="/contact" component={ContactPage} />
              {/* <Route path="/articleone" component={ArticleOne} />/ */}
              <Route path="/article/:name/1" exact component={ArticleOne} />
              <Route path="/article/:name/2" exact component={ArticleTwo} />
              <Route path="/article/:name/3" exact component={ArticleThree} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer></Footer>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
