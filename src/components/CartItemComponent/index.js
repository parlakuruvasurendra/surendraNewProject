import './index.css'
import {BiRupee} from 'react-icons/bi'
import {MdOutlineNavigateNext} from 'react-icons/md'

const CartItemComponent = () => (
  <div className="buttonsContainer">
    <button type="button" className="cartButton">
      <p className="items">Total Items | 2</p>
      <p className="items2">
        Total amount | <BiRupee className="rupee" />
        600
      </p>
    </button>
    <button type="button" className="cartButton2">
      <p className="items3">Continue </p>
      <MdOutlineNavigateNext className="nextIcon" />
    </button>
  </div>
)

export default CartItemComponent
