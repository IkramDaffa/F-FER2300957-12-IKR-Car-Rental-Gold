import { Container } from "reactstrap";
function BannerSection() {
  return (
    <Container className="banner3">
      <div className="banner3_place">
        <div className="wrap_banner3">
          <p className="judul">Sewa Mobil di (Lokasimu) Sekarang</p>
          <div className="wrap_deskripsi">
            <div className="wrap_deskripsi2">
              <p className="deskripsi">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="wrap_button">
            <a href="/searchCar" className="btn btn-success tombol_sewa">
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default BannerSection;
