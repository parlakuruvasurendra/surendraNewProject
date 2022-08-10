import './index.css'
import {IoMdShareAlt} from 'react-icons/io'

const ShopComponent = () => (
  <div className="shopContainer">
    <div className="innerContainer">
      <img
        src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660136387/saloonShopImage_gypqzt.png"
        alt="saloonLogo"
        className="saloonShopStyling"
      />
      <div className="headingUlContainer">
        <h1 className="rockHeading">Rock Hair Dressers</h1>
        <ul className="ulContainer">
          <li className="removingDefaultStyles">
            <img
              src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660137922/Group_289_rm1vvn.png"
              alt="circle"
            />
            <span className="openSpanElement">Open</span>
          </li>
          <li className="removingDefaultStyles">
            <img
              src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660138455/Group_288_waatao.png"
              alt="distanceLogo"
            />
            <span className="distanceStyling">2.3 km</span>
          </li>
          <a
            href="https://www.justdial.com/Delhi/Rock-hair-dresser-Near-Mother-Dairy-Palam-Colony/011PXX11-XX11-161022160530-R1T1_BZDET"
            target="_blank"
            rel="noreferrer"
            className="removeLinkingStyles"
          >
            <li className="removingDefaultStyles">
              <img
                src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660138863/Group_460_rrxrqk.png"
                alt="map"
              />
              <span className="distanceStylingText">View on map</span>
            </li>
          </a>
        </ul>
        <button type="button" className="saloonButtonStyling">
          Saloon
        </button>
      </div>
    </div>
    <IoMdShareAlt size={30} className="shareIconStyling" />
  </div>
)

export default ShopComponent
