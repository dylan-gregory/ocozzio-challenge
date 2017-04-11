var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');

class MainContainer extends React.Component {
  render(){
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
             <div className="nav-wrapper">
               <a href="" className="brand-logo center">Moxy</a>
            </div>
          </nav>
        </div>





      </div>
    )
  }
}



module.exports = {
  MainContainer
};
