var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/parallax.js');

class MainContainer extends React.Component {
  componentDidMount(){
    $('.parallax').parallax();
  }
  render(){
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
             <div className="nav-wrapper">
               <a href="" className="brand-logo"><img src="./images/logo_color.png" /> </a>
               <ul className="right hide-on-med-and-down">
                 <li id="nav-links"><a href="">Employer</a></li>
                 <li id="nav-links"><a href="">Member</a></li>
                 <li id="nav-links"><a href="">Broker</a></li>
                 <li id="nav-links"><a href="">Provider</a></li>
               </ul>
            </div>
          </nav>
        </div>

        <div>
          <div className="row banner">
            <div className="banner-box">
              <div className="banner-text">

              </div>
            </div>

          </div>

          <div className="row block-2">

            <div className="parallax-container para-comp">
              <div className="parallax"><img className="computer" src="./images/para_computer.jpg" /></div>
            </div>

          </div>

          <div className="row block-3">
            <div className="tool col m4 s12">
              dfhfghgfhgfh
            </div>
            <div className="key col m4 s12">
              gfhfgh
            </div>
            <div className="atom col m4 s12">
              rghgfhhfhf
            </div>
          </div>

          <div className="row block-4">

          </div>

          <div className="parallax-container para-tab">
            <div className="parallax"><img src="./images/para_tablet.jpg" /></div>
          </div>

          <div className="row block-5">
            <div className="container">

            </div>
          </div>


        </div>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>


      </div>
    )
  }
}



module.exports = {
  MainContainer
};
