import Navigation from "./navigation";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="flexbox">
          <img
            className="header__logo"
            src="src/assets/pokeball.svg"
            alt="Logo"
          />
          <h1 className="header__title">POKEDEX</h1>
        </div>
        <Navigation />
      </div>
    </>
  );
};
export default Header;
