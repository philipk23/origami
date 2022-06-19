import logo from './logo.svg';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import style from './App.module.css';

//      ul>li.listItem*11>a[href=#]{Going to $ }


function App() {
  return (
    <div className={style.app}>
      <Header/>
      <div className={style.container}>
        <Menu/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
