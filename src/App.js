import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <div className={styles.header}>Header</div>
      <div className={styles.listContainer}>listContainer</div>
      <Button style={{ fontSize: '14px', backgroundColor: "green", color: "white" }}>
        New Issue <div className={styles.circle}>5</div>
      </Button>
      <Space />
      <div className={styles.footer}>footer</div>
    </>
  )
}

function Button({ style, children }) {
  return (
    <button className={styles.button} style={style}>{children}</button>
  )
}
function Space() {
  return (
    <div className={styles.space}></div>
  )
}

export default App;