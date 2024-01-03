import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./about.module.css";
import Link from "next/link";

const About = () => {
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
    <div className={styles.about}>
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
        <div className={styles.about1}>
          <div className={styles.about2} onClick={onAboutTextClick}>
            about
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.srenEngbergCeoContainer}>
          <p className={styles.srenEngberg}>
            <span className={styles.srenEngberg1}>Søren Engberg</span>
          </p>
          <p className={styles.srenEngberg}>
            <span className={styles.span}>{`CEO & Producer`}</span>
          </p>
          <p className={styles.srenEngberg}>
            <span className={styles.span}>+45 21 69 15 14</span>
          </p>
          <p className={styles.srenEngberg}>
            <a
              className={styles.sekindfilm1}
              href="mailto:se@kind.film"
              target="_blank"
            >
              <span className={styles.span}>
                <span className={styles.sekindfilm3}>se@kind.film</span>
              </span>
            </a>
          </p>
        </div>
        <div className={styles.kateKagawaProducerContainer}>
          <p className={styles.srenEngberg}>
            <span className={styles.srenEngberg1}>Kate Kagawa</span>
          </p>
          <p className={styles.srenEngberg}>
            <span className={styles.span}>Producer</span>
          </p>
          <p className={styles.srenEngberg}>
            <span className={styles.span}>+45 26 71 81 78</span>
          </p>
          <p className={styles.srenEngberg}>
            <a
              className={styles.sekindfilm1}
              href="mailto:kk@kind.film"
              target="_blank"
            >
              <span className={styles.span}>
                <span className={styles.sekindfilm3}>kk@kind.film</span>
              </span>
            </a>
          </p>
        </div>
        <div className={styles.thoravej242400Container}>
          <p className={styles.srenEngberg}>Thoravej 24</p>
          <p className={styles.srenEngberg}>2400 Kbh NV</p>
          <p className={styles.srenEngberg}>Denmark</p>
        </div>
        <div className={styles.thoravej242400Container}>
          <p className={styles.srenEngberg}> Instagram
          {/* <Link href="https://www.instagram.com/kind_film/" passHref>  <a target='_blank'>Instagram</a>  
          </Link> */}
          </p>
          
          <p className={styles.srenEngberg}>Vimeo</p>
          <p className={styles.srenEngberg}>Linkedin</p>
        </div>
        <img
          className={styles.kindLogoWhite2Icon}
          alt=""
          src="/kind-logo-white-2@2x.png"
        />
      </div>
    </div>
  );
};

export default About;
