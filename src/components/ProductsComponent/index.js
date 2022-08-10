import './index.css'
import {BiRupee} from 'react-icons/bi'

const ProductsComponent = props => {
  const {passingProductData} = props
  const {imageUrl, price, styleType} = passingProductData

  return (
    <li className="defaultStyles">
      <div className="container">
        <img src={imageUrl} alt={styleType} className="imageStyling" />
        <div className="allItemsContainer">
          <div className="priceAndStyleContainer">
            <h1 className="styleStyling">{styleType}</h1>
            <div className="rupeeContainer">
              <BiRupee className="rupeeStyling" />
              <p className="priceStyling">{price}</p>
            </div>
          </div>
          <button type="button" className="addButtonStyling">
            ADD
          </button>
        </div>
      </div>
    </li>
  )
}

export default ProductsComponent
