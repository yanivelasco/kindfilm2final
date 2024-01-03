import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./h-o-m-e-p-a-g-e.module.css";

const HOMEPAGE = () => {
  const router = useRouter();

  const onAsbjrnRosenlundTextClick = useCallback(() => {
    router.push("/asbjorn");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  return (
    <div className={styles.homepage}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
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
        <div className={styles.about}>
          <div className={styles.asbjrnRosenlund} onClick={onAboutTextClick}>
            about
          </div>
        </div>
      </div>
      <div className={styles.part1}>
        <div className={styles.p1row1}>
          <div className={styles.p1r1column1}>
            <h2 className={styles.weAreAContainer}>
              <p className={styles.weAreA}>{`We are a `}</p>
              <p className={styles.weAreA}>
                high quality production company with a lot of highly skilled
                friends.
              </p>
            </h2>
          </div>
          <div className={styles.p1r1column2} />
        </div>
        <div className={styles.p1row2}>
          <div className={styles.p1r2column1} />
          <div className={styles.p1r2column2} />
        </div>
        <div className={styles.p1row3}>
          <div className={styles.p1r3column1} />
        </div>
      </div>
      <div className={styles.p2row1Parent}>
        <div className={styles.p2row1}>
          <div className={styles.p2r2} />
          <div className={styles.p2r21}>
            <h1 className={styles.weProduceFilms}>
              We produce films, stills, content, activations and creative
              concepts.
            </h1>
          </div>
        </div>
        <div className={styles.p2r3}>
          <div className={styles.p2r31} />
          <div className={styles.p2r5}>
            <h1 className={styles.weAreKindContainer}>
              <p className={styles.weAreA}>{`We are kind & creative.`}</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOMEPAGE;
