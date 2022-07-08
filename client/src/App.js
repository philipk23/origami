import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch, Routes } from 'react-router-dom';

import * as postService from './services/postService';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import About from './components/About';
import ContactUs from './components/ContactUs';
import style from './App.module.css';

//      ul>li.listItem*11>a[href=#]{Going to $ }


// function App() {
//   return (
//     <div className={style.app}>
//       <Header/>
//       <div className={style.container}>
//         <Menu/>
//         <Main/>
//       </div>
//     </div>
//   );
// }

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      posts: [],
      selectedPost: null
    }
  }

  componentDidMount(){
    postService.getAll()
      .then(posts => {
        this.setState({posts})
      })
  }

  onMenuItemClick(id){
    this.setState({selectedPost: id});
  }

  getPosts(){
    if (!this.state.selectedPost) {
      return this.state.posts;
    }else{
      return [this.state.posts.find(x => x.id === this.state.selectedPost)]
    }
  }

  render(){
    return (
      <div className={style.app}>
        <Header/>
        <div className={style.container}>
          <Menu onMenuItemClick={this.onMenuItemClick.bind(this)}/>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/" element={<Main posts={this.getPosts()}/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;
