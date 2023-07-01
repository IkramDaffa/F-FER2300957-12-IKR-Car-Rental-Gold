import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import facebook from "../../assets/icon/icon_facebook.png";
import instagram from "../../assets/icon/icon_instagram.png";
import email from "../../assets/icon/icon_mail.png";
import twitch from "../../assets/icon/icon_twitch.png";
import twitter from "../../assets/icon/icon_twitter.png";

function myFooter() {
  return (
    <footer className="text-center text-lg-start">
      <section className="kaki pt-1">
        <div className="container text-start text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset">
                  Our services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Why Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Testimonial
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
            </div>

            <div className="connect_us col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Connect with us</h6>
              <img src={facebook} alt="icon facebook" />
              <img src={instagram} alt="icon instagram" />
              <img src={twitter} alt="icon twitter" />
              <img src={email} alt="icon email" />
              <img src={twitch} alt="icon twitch" />
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Copyright Binar 2022
              </h6>
              <div className="logo"></div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default myFooter;
