import { Container } from "reactstrap";
import complete from "../../../assets/icon/icon_complete.png";
import price from "../../../assets/icon/icon_price.png";
import hours from "../../../assets/icon/icon_24hrs.png";
import proffesional from "../../../assets/icon/icon_professional.png";

function whyUsSection() {
  return (
    <>
      <Container className="tanya" id="tanya">
        <div className="pertanyaan">
          <div className="wrap_pertanyaan">
            <p className="beng">Why Us?</p>
            <p className="bindo">Mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>
        <div className="jawaban">
          <div className="wrap_jawaban">
            <div className="jawab">
              <div className="wrap_jawab1">
                <img src={complete} alt="icon complete" />
                <p className="judul">Monil Lengkap</p>
                <p>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
            <div className="jawab">
              <div className="wrap_jawab2">
                <img src={price} alt="icon price" />
                <p className="judul">Harga Murah</p>
                <p>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
            <div className="jawab">
              <div className="wrap_jawab3">
                <img src={hours} alt="icon clock" />
                <p className="judul">Layanan 24 Jam</p>
                <p>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div className="jawab">
              <div className="wrap_jawab4">
                <img src={proffesional} alt="icon profesional" />
                <p className="judul">Sopir Prodesional</p>
                <p>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default whyUsSection;
