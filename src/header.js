//    <!-- ***** Header Area Start ***** -->
import React from 'react';
import './header.css';

// const NavigationBar = ({ visible }) => ( 
//     <div id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
//          <ul class="navbar-nav ml-auto" id="nav">
//             <li class="nav-item active"><a class="nav-link" href="#home">Home</a></li>
//             <li class="nav-item active"><a class="nav-link" href="#silabus">Silabus</a></li>
//             <li class="nav-item active"><a class="nav-link" href="#bootcamp">Bootcamp</a></li>
//             <li class="nav-item active"><a class="nav-link" href="#contact">Contact</a></li>
//         </ul>
//     </div>
//   )

class Header extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    //     this.state = { visible: false }
    //   }
    
    //   handleClick() {
    //     this.setState(prev => ({ visible: !prev.visible }))
    //   }

  render() {
    return (  
        
    //     <div id="App">
    //     <button type="button" onClick={this.handleClick}>
    //       {this.state.visible ? 'Hide navbar' : 'Show navbar'}
    //     </button>
    //     <hr />
    //     <NavigationBar visible={this.state.visible} />
    //   </div>
    <div>
    <header class="header_area">
                    <div class="menu_area">
                        <nav class="navbar navbar-expand-sm bg-light fixed-top navbar-light">
                            {/* <!-- Logo --> */}
                            {/* <a class="navbar-brand" href="#">ews</a> */}
                            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> */}
                            {/* <!-- Menu Area --> */}
                            <div class="collapse navbar-collapse" id="ca-navbar">
                                <ul class="navbar-nav ml-auto" id="nav">
                                    <li class="nav-item active"><a class="nav-link" href="#home">Home</a></li>
                                    <li class="nav-item active"><a class="nav-link" href="#silabus">Silabus</a></li>
                                    <li class="nav-item active"><a class="nav-link" href="#bootcamp">Bootcamp</a></li>
                                    <li class="nav-item active"><a class="nav-link" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
    </header>
    </div>
    )
  }
}
export default Header;
