import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Onhover = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/h-o-m-e-p-a-g-e");
  }, [router]);

  const onAsbjrnRosenlundTextClick = useCallback(() => {
    router.push("/asbjorn");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  return (
    <div className={styles.onhover}>
      <div className={styles.navbar}>
        <div className={styles.logo} onClick={onLogoContainerClick}>
          <img
            className={styles.kindLogoWhite1Icon}
            alt=""
            src="/kind-logo-white-1@2x.png"
          />
        </div>
        <div className={styles.directors}>
          <div
            className={styles.asbjrnRosenlund}
            onClick={onAsbjrnRosenlundTextClick}
          >
            Asbjørn Rosenlund
          </div>
          <div className={styles.emilMilang}>Emil Milang</div>
          <div className={styles.franckKazagui}>Franck Kazagui</div>
          <div className={styles.franckKazagui}>Frederik Paludan</div>
          <div className={styles.franckKazagui}>Magnus Milang</div>
          <div className={styles.franckKazagui}>Meeto</div>
          <div className={styles.franckKazagui}>Mette Carla</div>
          <div className={styles.franckKazagui}>Stefan Treschow</div>
          <div className={styles.franckKazagui}>Tim Erem</div>
          <div className={styles.franckKazagui}>Viivi Huuska</div>
          <div className={styles.franckKazagui}>KindZoo</div>
        </div>
        <div className={styles.showreel5sec}>
          <div className={styles.about} onClick={onAboutTextClick}>
            about
          </div>
        </div>
      </div>
      <div className={styles.video5sec} />
    </div>
  );
};

export default Onhover;
