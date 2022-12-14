import './index.css'
import {BiSearch} from 'react-icons/bi'
import ProductsComponent from '../ProductsComponent'

const productDetailsData = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/den2yh2w9/image/upload/v1660144921/David-Beckham-Hairstyle-5190_pvt9iy.png',
    styleType: 'Haircut',
    price: 400,
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/den2yh2w9/image/upload/v1660146376/Dhoni_Image_krfuia.jpg',
    styleType: 'Razor cut',
    price: 400,
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/den2yh2w9/image/upload/v1660146988/pexels-carlos-magno-7109735_u9murc.jpg',
    styleType: 'Shaving',
    price: 50,
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/den2yh2w9/image/upload/v1660151790/Best_Short_Beard_Styles_For_Men_fgi7ch.jpg',
    styleType: 'Beard Styling',
    price: 72,
  },
]

const SearchContainer = () => (
  <div>
    <div className="searchContainer">
      <div className="inputAndSearchIconContainer">
        <input
          type="search"
          className="inputStyling"
          placeholder="Search for Products or Services"
        />
        <BiSearch className="searchIconStyling" />
      </div>
    </div>
    <ul className="productsContainer">
      {productDetailsData.map(eachItem => (
        <ProductsComponent key={eachItem.id} passingProductData={eachItem} />
      ))}
    </ul>
  </div>
)

export default SearchContainer
