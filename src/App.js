import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import styles from './Components/style.module.css'
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.contentContainer}>
      <Navigation />
      <Main />
      </div>
    </div>
  );
}

export default App;
