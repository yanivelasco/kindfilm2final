import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./asbjorn.module.css";

const Asbjorn = () => {
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
    <div className={styles.asbjorn}>
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
        <div className={styles.about}>
          <div className={styles.about1} onClick={onAboutTextClick}>
            about
          </div>
        </div>
      </div>
      <div className={styles.films}>
        <div className={styles.asbjorn1}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <b className={styles.asbjrnRosenlund1}>
              <p className={styles.asbjrnRosenlund2}>Asbjørn Rosenlund</p>
            </b>
            <img
              className={styles.asbjorn11}
              alt=""
              src="/asbjorn-1-1@2x.png"
            />
          </div>
          <div className={styles.rectangleprofile} />
          <div className={styles.rectangleinsta} />
          <b className={styles.asbjornrosenlund}>
            <p className={styles.asbjrnRosenlund2}>@asbjornrosenlund</p>
          </b>
          <div className={styles.asbjrnRosenlundKnown}>
            Asbjørn Rosenlund known for his brilliant eye for detail, contrast
            and subtle wit, delivered with class and confidence. He directs
            commercial and fiction films first but that is not all to Asbjørn’s
            story.
          </div>
          <div className={styles.film7} >
          <iframe 
              className={styles.screenshot20231218At0341}
              
              src="https://kind.slateapp.com/embed/clip/73" 
              allow="autoplay" 
              frameborder="0" 
              scrolling="no"
              allowfullscreen="true" 
              style={{ width: '100%', height: '100%', border: 'none', position:'relative', overflow:'hidden' }}>
            </iframe> 
        </div>
          <div className={styles.film6} >
          <iframe 
              className={styles.screenshot20231218At0341}
              
              src="https://kind.slateapp.com/embed/clip/722" 
              allow="autoplay" 
              frameborder="0" 
              scrolling="no"
              allowfullscreen="true" 
              style={{ width: '100%', height: '100%', border: 'none', position:'relative', overflow:'hidden' }}>
            </iframe> 
        </div>
          <div className={styles.film5} >
          <iframe 
              className={styles.screenshot20231218At0341}
              
              src="https://kind.slateapp.com/embed/clip/723" 
              allow="autoplay" 
              frameborder="0" 
              scrolling="no"
              allowfullscreen="true" 
              style={{ width: '100%', height: '100%', border: 'none', position:'relative', overflow:'hidden' }}>
            </iframe> 
        </div>
          <div className={styles.film4} >
          <iframe 
              className={styles.screenshot20231218At0341}
              
              src="https://kind.slateapp.com/embed/clip/725" 
              allow="autoplay" 
              frameborder="0" 
              scrolling="no"
              allowfullscreen="true" 
              style={{ width: '100%', height: '100%', border: 'none', position:'relative', overflow:'hidden' }}>
            </iframe> 
        </div>
          <div className={styles.film3} >
          <iframe 
              className={styles.screenshot20231218At0341}
              
              src="https://kind.slateapp.com/embed/clip/721" 
              allow="autoplay" 
              frameborder="0" 
              scrolling="no"
              allowfullscreen="true" 
              style={{ width: '100%', height: '100%', border: 'none', position:'relative', overflow:'hidden' }}>
            </iframe> 
        </div>
      
          <div className={styles.film2} >
          <iframe 
              className={styles.screenshot20231218At0341}
              
              src="https://kind.slateapp.com/embed/clip/72" 
              allow="autoplay" 
              frameborder="0" 
              scrolling="no"
              allowfullscreen="true" 
              style={{ width: '100%', height: '100%', border: 'none', position:'relative', overflow:'hidden' }}>
            </iframe> 
        </div>
          
          <div className={styles.film1} >
          <iframe 
              className={styles.screenshot20231218At0341}
              
              src="https://kind.slateapp.com/embed/clip/74" 
              allow="autoplay" 
              frameborder="0" 
              scrolling="no"
              allowfullscreen="true" 
              style={{ width: '100%', height: '100%', border: 'none', position:'relative', overflow:'hidden' }}>
            </iframe> 
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Asbjorn;
