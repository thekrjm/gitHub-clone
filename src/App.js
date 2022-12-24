import styles from './App.module.css';
import Button from './components/Button.js'
import Header from './Header.js';

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <div className={styles.listContainer}>listContainer</div>
      <Button style={{ fontSize: '14px', backgroundColor: "green", color: "white" }}>
        New Issue
      </Button>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default App;