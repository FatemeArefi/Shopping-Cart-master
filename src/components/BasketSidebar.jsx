import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./BasketSidebar.module.css";

function BasketSideBar({ state, clickHandler }) {
  return (
    <div>
      <div className={styles.sidebar}>
        <div>
          <TbChecklist />
          <p>Total Price:</p>
          <span>{state.total}$</span>
        </div>
        <div>
          <FaHashtag />
          <p>Quantity:</p>
          <span>{state.itemsCounter}</span>
        </div>
        <div>
          <BsPatchCheck />
          <p>Status:</p>
          <span>{!state.checkout && "Pending..."}</span>
        </div>

        <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
      </div>
    </div>
  );
}

export default BasketSideBar;
