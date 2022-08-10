import './index.css'

const Header = () => (
  <nav className="navContainer">
    <img
      src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660135227/navtagImage_fxafyo.png"
      alt="binoLogo"
      className="binoStyling"
    />
    <div className="spanContainer">
      <h1 className="poweredHeading">
        Powered by <span className="spanElementStyling">boni</span>
      </h1>
    </div>
  </nav>
)

export default Header
