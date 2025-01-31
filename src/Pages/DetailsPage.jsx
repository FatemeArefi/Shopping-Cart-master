import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import { useProductDetails } from "../context/ProductContext";
import Loader from "../components/Loader";

import styles from "./DetailPage.module.css";

function DetailsPage() {
  const { id } = useParams();

  const productDetails = useProductDetails(+id);

  if (!productDetails) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>
          <SiOpenproject />
          {productDetails.description}
        </p>
        <div></div>
        <p className={styles.category}>{productDetails.category}</p>

        <span className={styles.peice}>
          <IoMdPricetag />
          {productDetails.price}$
        </span>
        <Link to="/products">
          <FaArrowLeft />
          <span>Back to shop</span>
        </Link>
      </div>
    </div>
  );
}

export default DetailsPage;
