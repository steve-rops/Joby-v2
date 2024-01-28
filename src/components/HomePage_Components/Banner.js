import banner from "../../photos/banner-joby.webp";
import styles from "./banner.module.css";

function Banner() {
  return (
    <div className="h-fit w-full grid place-items-center">
      <img className={styles.banner} src={banner} alt="test" />
    </div>
  );
}

export default Banner;
