import { Container } from "reactstrap";
import mobil from "../../../assets/img/img_car.png";
function heroSection() {
  return (
    <Container fluid className="banner pe-0">
      <div className="banner_info">
        <div className="wrap_info">
          <p className="info">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </p>
          <p className="deskripsi">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <a className="btn btn-success tombol_sewa" href="/searchCar">
            Mulai Sewa Mobil
          </a>
        </div>
      </div>
      <div className="banner_mobil">
        <div className="wrap_img">
          <img src={mobil} alt="gambar mobil" />
        </div>
      </div>
    </Container>
  );
}

export default heroSection;
