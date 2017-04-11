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
          <div className="banner">
            <div className="row">
              <div className="banner-text">

              </div>
            </div>

          </div>

          <div className="block-2">

            <div className="parallax-container">
              <div className="parallax"><img src="./images/para_computer.jpg" /></div>
            </div>

          </div>


        </div>


      </div>
    )
  }
}



module.exports = {
  MainContainer
};
