import React, { Component } from "react";
import "./App.css";
import anime from "../node_modules/animejs/lib/anime.es";
import CountUp from "react-countup";
import Anime from "react-anime";

class App extends Component {
  render() {
    return (
      <div id="app">
        <main className="py-4">
          <header>
            <h1>Sina haseli</h1>
            <div className="header__description">
              " front-end developer & gamer & GYM lover. finding solutions for
              problems 👨🏻 &zwj;
              <i className="fas fa-laptop-code" />
              <i className="fas fa-headset" />
              <i className="fas fa-dumbbell" />"
            </div>
            <div className="header__social">
              <ul>
                <li>
                  <a href="https://twitter.com/Deomifucking1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sina-haseli">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/Deomi2">
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
                          Do 100 Business Developer Tasks
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
            <h2>Skills</h2>
            <div className="container cont2">
              <div className="row">
                <div className="col-12">
                  <div className="skillbar  clearfix  ">
                    <div className="skillbar-title">
                      <span>HTML5</span>
                    </div>
                    <Anime width="95%" easing="linear" duration={4000}>
                      <div className="skillbar-bar html"> </div>
                    </Anime>
                    <div className="skill-bar-percent Count">
                      <CountUp end={95} duration={5.5} />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="skillbar  clearfix  ">
                    <div className="skillbar-title css">
                      <span>CSS</span>
                    </div>
                    <Anime width="90%" easing="linear" duration={4000}>
                      <div className="skillbar-bar css"> </div>
                    </Anime>
                    <div className="skill-bar-percent Count">
                      <CountUp end={90} duration={5.5} />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="skillbar  clearfix  ">
                    <div className="skillbar-title bootstrap">
                      <span>Bootstrap</span>
                    </div>
                    <Anime width="97%" easing="linear" duration={4000}>
                      <div className="skillbar-bar bootstrap"> </div>
                    </Anime>
                    <div className="skill-bar-percent Count">
                      <CountUp end={97} duration={5.5} />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="skillbar  clearfix  ">
                    <div className="skillbar-title react">
                      <span>React</span>
                    </div>
                    <Anime width="80%" easing="linear" duration={4000}>
                      <div className="skillbar-bar react"> </div>
                    </Anime>
                    <div className="skill-bar-percent Count">
                      <CountUp end={80} duration={5.5} />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="skillbar  clearfix  ">
                    <div className="skillbar-title redux">
                      <span>Redux</span>
                    </div>
                    <Anime width="75%" easing="linear" duration={4000}>
                      <div className="skillbar-bar redux"> </div>
                    </Anime>
                    <div className="skill-bar-percent Count">
                      <CountUp end={75} duration={5.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="info">
                    <i className="far fa-heart"> </i>
                    <p>
                      I am a junior front-end developer but i'm trying to do my
                      best and be a seniro front-end develpoer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="footer">
                    <hr />
                    <p>
                      Make by <i className="far fa-heart love" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
