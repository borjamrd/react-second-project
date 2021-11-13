import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles.css";
import "./assets/images/avatar borja-02.png"

const user = undefined;

const offers=[
  {id:2, title: "2x1 en hamburguesas", description: "Come 2 hamburguesas y paga una", quantity: 5, price:10},
  {id:2, title: "2x1 en helados", description: "Come 2 hamburguesas y paga una", quantity: 5, price:10},
  {id:2, title: "2x1 en donettes", description: "Come 2 hamburguesas y paga una", quantity: 5, price:10},
  {id:2, title: "2x1 en botellines de agua", description: "Come 2 hamburguesas y paga una", quantity: 5, price:10},
]

const sections = [
  {id:1, name: "Home", link: ""},
  {id:2, name: "Super Ofertas", link: "super-ofertas/"},
  {id:3, name: "Contacto", link: "contacto/"},
  {id:4, name: "Ayuda", link: "ayuda/"},
]


class Header extends React.Component{
  render(){
    return <div className="header">
      <SiteLogo />
      <NavBar elements = {sections} />
    </div>
  }
}

class SiteLogo extends React.Component{
  render(){
    return <div className="Site-Logo">
      <img src="logo.png"></img>
    </div>
  }
}
class NavBar extends React.Component{
  render(){
    let navbarElements = this.props.elements.map((element)=> <nav>
      <li className="nav-bar-elements" href={element.link}>{element.name}</li>
    </nav>)
    return <div className="nav-bar">
      {navbarElements}
    </div>
  }
}

class User extends React.Component{

  constructor(props){
    super(props);
    this.state = {user: props.user};
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login(){
    this.setState({user: {id: 145, username: "albertofromhome", name: "Alberto", address: "Calle mi casa, 5, 28098, Madrid", image: "/assets/images/avatar borja-02.png"}});
  }
  logout(){
    this.setState({user: undefined});
  }
  render() {
    return <div>{this.state.user !== undefined
                ?<div>
                    <div><img src={this.state.user.image}/></div>
                    <div>Hola {this.state.user.username}, <span  onClick={this.logout}>Logout</span></div>
                  </div>
                  :<div>Haz <span onClick={this.login}>Login</span></div>
                }</div>
  }
}

class SectionOffer extends React.Component{
  render(){
    let showOffer = this.props.offers.map((offer)=> <div><h3>{offer.title}</h3><p>{offer.description}</p><p>{offer.quantity}</p><p>{offer.price}</p></div>);

    return <div className="section-offer">
      {showOffer}
    </div>
  }
}
function App (){
  return (
    <div>
      <Header />
      <User user={user}/>
      <SectionOffer offers={offers}/>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));