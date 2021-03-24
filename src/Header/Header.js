import classes from './Header.module.css';

let Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <h1>
          Varia`s
        </h1>
        <p className={classes.description}>
          birthday party
        </p>
        <span className={classes.text}>
            come to celebrate with us!
          </span>
      </div>
    </header>
  )
}

export default Header;