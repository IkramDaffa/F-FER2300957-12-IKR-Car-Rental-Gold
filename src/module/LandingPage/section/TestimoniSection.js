import bintang from "../../../assets/icon/Star 1.png";
import profil from "../../../assets/img/img_photo.png";
import profil2 from "../../../assets/img/img_photo2.png";
import tmblkiri from "../../../assets/icon/Left button.png";
import tmblkanan from "../../../assets/icon/Right button.png";
import React from "react";
function MyTestimoni() {
  const slideleft = () => {
    const slider = document.querySelector(".testimoni_content");
    const windowWidth = window.innerWidth;
    if (windowWidth >= 992) {
      slider.scrollLeft -= 302;
      if (slider.scrollLeft === 0) slider.scrollLeft = 420;
    } else {
      slider.scrollLeft -= 360;
      if (slider.scrollLeft === 0) slider.scrollLeft = 697;
    }
  };
  const slideright = () => {
    const slider = document.querySelector(".testimoni_content");
    const windowWidth = window.innerWidth;
    if (windowWidth >= 992) {
      slider.scrollLeft += 302;
      if (slider.scrollLeft >= 420) slider.scrollLeft = 0;
    } else {
      slider.scrollLeft += 360;
      if (slider.scrollLeft >= 697) slider.scrollLeft = 0;
    }
  };
  return (
    <div className="testimoni" id="Testimoni">
      <div className="testimoni_judul">
        <div className="wrap_testimoni">
          <p className="jdl_testimoni">Testimonial</p>
          <p className="isi_testimoni">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
      </div>
      <div className="testimoni_content">
        <div className="testi_content">
          <div className="gambar_testi">
            <div className="wrap_gbrtesti">
              <img src={profil} alt="foto profil" />
            </div>
          </div>
          <div className="review_testi">
            <div className="wrap_review">
              <div className="wrap_bintang">
                <img src={bintang} alt="gambar bintang" />
                <img src={bintang} alt="gambar bintang" />
                <img src={bintang} alt="gambar bintang" />
                <img src={bintang} alt="gambar bintang" />
                <img src={bintang} alt="gambar bintang" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div className="testi_content">
          <div className="gambar_testi">
            <div className="wrap_gbrtesti">
              <img src={profil} alt="foto profil" />
            </div>
          </div>
          <div className="review_testi">
            <div className="wrap_review">
              <div className="wrap_bintang">
                <img src={bintang} alt="gambar bintang" />
                <img src={bintang} alt="gambar bintang" />
                <img src={bintang} alt="gambar bintang" />
                <img src={bintang} alt="gambar bintang" />
                <img src={bintang} alt="gambar bintang" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div className="testi_content">
          <div className="gambar_testi">
            <div className="wrap_gbrtesti">
              <img src={profil2} alt="foto profil" />
            </div>
          </div>
          <div className="review_testi">
            <div className="wrap_review">
              <img src={bintang} alt="gambar bintang" />
              <img src={bintang} alt="gambar bintang" />
              <img src={bintang} alt="gambar bintang" />
              <img src={bintang} alt="gambar bintang" />
              <img src={bintang} alt="gambar bintang" />
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="button_testi">
        <img src={tmblkiri} alt="tombol kiri" onClick={slideleft} />
        <img src={tmblkanan} alt="tombol kanan" onClick={slideright} />
      </div>
    </div>
  );
}

export default MyTestimoni;
