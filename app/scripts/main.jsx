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

        <div className="floating-nav">
          <nav className="floating-bar">
            <ul className="">
              <li ><a href="">HOME</a></li>
              <li ><a href="">ABOUT US</a></li>
              <li ><a href="">OUR SOLUTIONS</a></li>
              <li ><a href="">CONTACT US</a></li>
            </ul>
          </nav>
        </div>

        <div className="navbar-fixed">
          <nav >
             <div className="nav-wrapper">
               <a href="" className="brand-logo"><img src="./images/logo_color.png" /> </a>
               <ul className="right hide-on-med-and-down">
                 <li ><a href="">Employer</a></li>
                 <li ><a href="">Member</a></li>
                 <li ><a href="">Broker</a></li>
                 <li ><a href="">Provider</a></li>
               </ul>
            </div>
          </nav>
        </div>


        <div>
          <div className="row banner">
            <div className="banner-box">
              <div className="banner-text">

                <div className="banner-bottom">

                </div>
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

            <div className="col m7 left-block">

            </div>
            <div className="col m5">

            </div>
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
              <div className="col m4">
                <h5 className="white-text">CONTACT US</h5>
              </div>
              <div className="col m4">
                <h5 className="white-text">CAREERS</h5>
              </div>
              <div className="col m4">
                <h5 className="white-text">Lipsum.com</h5>
              </div>

            </div>



          <div className="row">
            <img src="./images/logo_ko.png" />

            <img src="./images/logo_linkedin.png" />
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
