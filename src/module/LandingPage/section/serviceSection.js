import { Container } from "reactstrap";
import serviceImg from "../../../assets/img/img_service.png";
import point from "../../../assets/icon/point.png";
function ServiceSection() {
  return (
    <Container className="banner2" id="OurService">
      <div className="banner2_gambar">
        <div className="wrap_gambar">
          <img src={serviceImg} alt="gambar wanita tersenyum" />
        </div>
      </div>
      <div className="banner2_info">
        <div className="infor">
          <p className="judl">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </p>
          <p className="deskrip">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <p className="point">
            <img src={point} alt="icon point" /> Sewa Mobil Dengan Supir di Bali
            12 Jam
          </p>
          <p className="point">
            <img src={point} alt="icon point" /> Sewa Mobil Lepas Kunci di Bali
            24 Jam
          </p>
          <p className="point">
            <img src={point} alt="icon point" /> Sewa Mobil Jangka Panjang
            Bulanan
          </p>
          <p className="point">
            <img src={point} alt="icon point" /> Gratis Antar - Jemput Mobil di
            Bandara
          </p>
          <p className="point">
            <img src={point} alt="icon point" /> Layanan Airport Transfer / Drop
            In Out
          </p>
        </div>
      </div>
    </Container>
  );
}
export default ServiceSection;
