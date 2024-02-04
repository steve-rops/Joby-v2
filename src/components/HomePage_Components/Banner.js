import banner from "../../photos/landingpage.webp";
import styles from "./banner.module.css";

function Banner() {
  return (
    <div className="h-fit w-full grid place-items-center">
      <img className={styles.banner} src={banner} alt="test" />
    </div>
  );
}

export default Banner;
