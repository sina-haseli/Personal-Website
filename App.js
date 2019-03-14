import React, {Component} from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <main className="py-4">
          <header>
            <h1>Sina haseli</h1>
            <div className="header__description">
              " front-end developer & gamer & GYM lover. finding solutions for
              problems 👨🏻&zwj;💻🐺🥗💪🇦🇹 "
            </div>
            <div className="header__social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-telegram" />
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <main>
            <h2>PERSONAL GOALS FOR 2019</h2>
            <div className="container">
              <div className="card__container">
                <div className="row">
                  <div className="card__col col-12 col-lg-6">
                    <div className="card card--red">
                      <div className="card__upper">
                        <div className="card__title">
                          Do 365 Business Developer Tasks
                        </div>
                      </div>
                      <div className="card__lower">
                        <span className="card__progress--status">5/100</span>
                        <span className="card__progress--bar">
                          <span className="card__progress-bar-inner" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card__col col-12 col-lg-6">
                    <div className="card card__image">
                      <div className="card__upper">
                        <div className="card__title">Read 10 Books</div>
                      </div>
                      <div className="card__lower">
                        <span className="card__progress--status">1/10</span>
                        <span className="card__progress--bar">
                          <span className="card__progress-bar-inner" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card__col col-12 col-lg-4">
                    <div className="card card__blue">
                      <div className="card__upper">
                        <div className="card__title">Learn nodejs & Go</div>
                      </div>
                      <div className="card__lower">
                        <span className="card__progress--status">0/100%</span>
                        <span className="card__progress--bar">
                          <span className="card__progress-bar-inner" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card__col col-12 col-lg-4">
                    <div className="card card__workout">
                      <div className="card__upper">
                        <div className="card__title">Complete 100 workouts</div>
                      </div>
                      <div className="card__lower">
                        <span className="card__progress--status">5/100</span>
                        <span className="card__progress--bar">
                          <span className="card__progress-bar-inner" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card__col col-12 col-lg-4">
                    <div className="card card__lose">
                      <div className="card__upper">
                        <div className="card__title">Lose 5 kgs</div>
                      </div>
                      <div className="card__lower">
                        <span className="card__progress--status">0/5</span>
                        <span className="card__progress--bar">
                          <span className="card__progress-bar-inner" />
                        </span>
                      </div>
                    </div>
                  </div>
                    <div className="card__col col-12 col-lg-4">
                        <div className="card card__sass">
                            <div className="card__upper">
                                <div className="card__title">Learn Sass</div>
                            </div>
                            <div className="card__lower">
                                <span className="card__progress--status">50/100</span>
                                <span className="card__progress--bar">
                          <span className="card__progress-bar-inner" />
                        </span>
                            </div>
                        </div>
                    </div>
                    <div className="card__col col-12 col-lg-8">
                        <div className="card card__js">
                            <div className="card__upper">
                                <div className="card__title">Learn Javascript</div>
                            </div>
                            <div className="card__lower">
                                <span className="card__progress--status">55/100</span>
                                <span className="card__progress--bar">
                          <span className="card__progress-bar-inner" />
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </main>
        </main>
      </div>
    );
  }
}

export default App;