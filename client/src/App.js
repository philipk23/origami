import logo from './logo.svg';
import style from './App.module.css';
import Header from './components/Header/Header';

//      ul>li.listItem*11>a[href=#]{Going to $ }


function App() {
  return (
    <div className={style.app}>
      <Header/>
    </div>
  );
}

export default App;
