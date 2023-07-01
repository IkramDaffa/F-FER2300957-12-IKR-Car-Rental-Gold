import { Label, Input } from "reactstrap";
import Select from "react-select";
const kategoriOptions = [
  { value: "", label: "2-4 orang" },
  { value: "", label: "4-6 orang" },
  { value: "", label: "6-8 orang" },
];
const hargaOptions = [
  { value: "", label: "< Rp.400.000>" },
  { value: "", label: "Rp.400.00 - Rp600.000" },
  { value: "", label: "> 600.000" },
];
const statusOptions = [
  { value: "", label: "Disewa" },
  { value: "", label: "Belum disewa" },
];

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    // console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      backgroundColor: isFocused ? "#C9E7CA" : null,
      color: "#333333",
    };
  },
};

function searchSection() {
  return (
    <div className="search">
      <div className="container card position-relative pencarian_mobil">
        <div className="row card-body justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <Label for="nama_mobil">Nama Mobil</Label>
                <Input
                  id="nama_mobil"
                  name="carName"
                  placeholder="Ketik nama/tipe mobil"
                  type="text"
                />
                {/* <label htmlFor="nama_mobil" className="form-label">
                  Nama Mobil
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nama_mobil"
                  placeholder="Ketik nama/tipe mobil"
                /> */}
              </div>
              <div className="col-md-3">
                <Label for="kategori_mobil">Kategori</Label>
                <Select
                  id="kategori_mobil"
                  placeholder="masukkan kapasitas mobil"
                  defaultValue=""
                  label="kategoriMobil"
                  options={kategoriOptions}
                  styles={colourStyles}
                />
                {/* <Input
                  id="kategori_mobil"
                  name="kategoriMobil"
                  type="select"
                  required={true}
                >
                  <option disabled={true} selected hidden>
                    masukkan kapasitas mobil
                  </option>
                  <option>2-4 orang</option>
                  <option>4-6 orang</option>
                  <option>6-8 orang</option>
                </Input> */}
                {/* <label htmlFor="kategori_mobil" className="form-label">
                  Kategori
                </label>
                <select className="form-select" id="kategori_mobil" required>
                  <option value="" disabled selected hidden>
                    Masukkan Kapasitas Mobil
                  </option>
                  <option value="">2-4 orang</option>
                  <option value="">4-6 orang</option>
                  <option value="">6-8 orang</option>
                </select> */}
              </div>
              <div className="col-md-3">
                <Label for="harga_mobil">harga</Label>
                <Select
                  id="harga_mobil"
                  placeholder="Masukkan Harga Sewa per Hari"
                  options={hargaOptions}
                  styles={colourStyles}
                />

                {/* <label htmlFor="harga_mobil" className="form-label">
                  Harga
                </label>
                <select className="form-select" id="harga_mobil" required>
                  <option value="" disabled selected hidden>
                    Masukkan Harga Sewa per Hari
                  </option>
                  <option value="">&lt; Rp.400.000</option>
                  <option value="">Rp.400.000-Rp.600.000</option>
                  <option value="">&gt; Rp.600.000</option>
                </select> */}
              </div>
              <div className="col-md-3">
                <Label for="status_mobil">Status</Label>
                <Select
                  id="status_mobil"
                  name="statusMobil"
                  defaultValue={statusOptions}
                  options={statusOptions}
                  styles={colourStyles}
                />
                {/* <Input
                  id="status_mobil"
                  name="statusMobil"
                  type="select"
                  required={true}
                >
                  <option disabled={true} selected hidden>
                    Pilih Status Mobil
                  </option>
                  <option>Disewa</option>
                  <option>Belum Disewa</option>
                </Input> */}
                {/* <select className="form-select" id="status_mobil" required>
                  <option value="">Disewa</option>
                  <option value="">Belum Disewa</option>
                </select> */}
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <a href="/searchResult" type="button" className="btn btn-success">
              Cari Mobil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default searchSection;
