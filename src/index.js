import React from 'react';
import ReactDOM from 'react-dom';

const user={id:145, username:"albertodesdecasa", name:"Alberto", address:"Calle de mi casa, 5, 28009, Madrid", image: "/images/user.jpg"}

/* const offers=[
  {id:2, title: "2x1 en hamburguesas", description: "Come 2 hamburguesas y paga una", quantity: 5, price:10},
  {id:2, title: "2x1 en helados", description: "Come 2 hamburguesas y paga una", quantity: 5, price:10},
  {id:2, title: "2x1 en donettes", description: "Come 2 hamburguesas y paga una", quantity: 5, price:10},
  {id:2, title: "2x1 en botellines de agua", description: "Come 2 hamburguesas y paga una", quantity: 5, price:10},
] */

/* const sections = [
  {id:1, name: "Home", link: ""},
  {id:2, name: "Super Ofertas", link: "super-ofertas/"},
  {id:3, name: "Contacto", link: "contacto/"},
  {id:4, name: "Ayuda", link: "ayuda/"},
]
class SiteLogo extends React.Component{
  render(){
    return <div className="Site-Logo">
      <img src="#"></img>
    </div>
  }
} */

class User extends React.Component{

  constructor(props){
    super(props);
    this.state = {user: props.user}
    this.login ={}
    this.logout = {}
  }
  login(){

  
  }
  logout(){

  }

  render(){
    return <div>{this.state.user !== undefined
                ?</div>
                  <div><img src={this.state.user.image}/></div>
                  <div>Hola {this.state.user.username},<a  href="logout/">Logout</a></div>
                  </div>
                  :<div>Haz <span onClick={this.login}>Login</span></div>
                }</div>
  }
}
ReactDOM.render(<User user={user}/>,document.getElementById('root'));


/* function App (){
  return (
    <div>
      <Header />
      <User />
      <SectionOffer/>
    </div>
  )
} */
/* 
ReactDOM.render(<App/>,document.getElementById('root')); */