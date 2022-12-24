import styles from './App.module.css';
import Footer from './Footer';
import Header from './Header.js';
import ListContainer from './ListContainer.js';

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  )
}

export default App;