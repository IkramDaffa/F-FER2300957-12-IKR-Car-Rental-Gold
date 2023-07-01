import mobil from "..//../../assets/img/image 1.png";
import "../../../style/searchResult.css";
function resultSection() {
  return (
    <div className="result">
      <div className="container card position-relative search_content">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="wrap_gmbrresult d-flex justify-content-center">
                    <img
                      src={mobil}
                      alt="gambar mobil"
                      className="result_img card-img-top"
                    />
                  </div>
                  <p className="card-title">Innova</p>
                  <p className="card-subtitle hargaperhari">
                    Rp.500.000 / haari
                  </p>
                  <p className="card-text deskripmbl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="#"
                    className="btn btn-success d-flex justify-content-center"
                  >
                    Pilih Mobil
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="wrap_gmbrresult d-flex justify-content-center">
                    <img
                      src={mobil}
                      alt="gambar mobil"
                      className="result_img card-img-top"
                    />
                  </div>
                  <p className="card-title">Innova</p>
                  <p className="card-subtitle hargaperhari">
                    Rp.500.000 / haari
                  </p>
                  <p className="card-text deskripmbl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="#"
                    className="btn btn-success d-flex justify-content-center"
                  >
                    Pilih Mobil
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="wrap_gmbrresult d-flex justify-content-center">
                    <img
                      src={mobil}
                      alt="gambar mobil"
                      className="result_img card-img-top"
                    />
                  </div>
                  <p className="card-title">Innova</p>
                  <p className="card-subtitle hargaperhari">
                    Rp.500.000 / haari
                  </p>
                  <p className="card-text deskripmbl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="#"
                    className="btn btn-success d-flex justify-content-center"
                  >
                    Pilih Mobil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default resultSection;
