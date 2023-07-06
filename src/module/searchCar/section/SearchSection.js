import {
  Label,
  Input,
  FormGroup,
  Col,
  Card,
  CardBody,
  CardText,
  Button,
  Row,
  CardTitle,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "reactstrap";
import user from "../../../assets/icon/fi_users.png";
import { Fragment, useState } from "react";
import { API } from "../../../common/API";

function SearchSection() {
  const [nameCar, setNameCar] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isRented, setIsRented] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [carDetail, setCarDetail] = useState([]);
  const [open, setOpen] = useState("");
  const [detailOpen, setDetailOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);

  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  const fetchDataCar = (id) => {
    API.get(`admin/car/${id}`)
      .then((res) => {
        setCarDetail(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const fetchData = () => {
    const params = `name=${nameCar}&category=${category}&isRented=${isRented}&${mappingPrice(
      price
    )}`;
    // console.log(params);
    API.get(`admin/v2/car?${params}&page=1&pageSize=10`)
      .then((res) => {
        setData(res.data.cars);
        // console.log(res.data.cars);
      })
      .catch((err) => {
        console.log("error= " + err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const mappingPrice = (price) => {
    switch (price) {
      case "low":
        return "minPrice=0&maxPrice=400000";
      case "medium":
        return "minPrice=400000&maxPrice=600000";
      case "high":
        return "minPrice=600000&maxPrice=1000000";
      default:
        return "";
    }
  };
  const mappingCategory = (category) => {
    switch (category) {
      case "small":
        return "2 - 4 orang";
      case "medium":
        return "4 - 6 orang";
      case "large":
        return "6 - 8 orang";
      default:
        return "";
    }
  };
  const formatToIDR = (idr) => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${"Rp. "}${parsed}`;
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setResultOpen(true);
    setIsLoading(true);
    fetchData();
    // console.log(data);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setDetailOpen(false);
    setResultOpen(true);
  };
  const handleBack = (e) => {
    e.preventDefault();
    setDetailOpen(false);
    setResultOpen(true);
  };

  return (
    <>
      <div className="search">
        <div className="container card position-relative pencarian_mobil">
          <div className="row card-body justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <FormGroup>
                    <Label for="nama_mobil">Nama Mobil</Label>
                    <Input
                      id="nama_mobil"
                      name="carName"
                      placeholder="Ketik nama/tipe mobil"
                      type="text"
                      disabled={isSubmitted}
                      onChange={(e) => setNameCar(e.target.value)}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-3">
                  <FormGroup>
                    <Label for="kategori_mobil">Kategori</Label>
                    <Input
                      id="kategori_mobil"
                      name="select"
                      type="select"
                      disabled={isSubmitted}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option hidden>Masukkan Kapasitas Mobil</option>
                      <option className="opt" value="small">
                        2-4 orang
                      </option>
                      <option className="opt" value="medium">
                        4-6 orang
                      </option>
                      <option className="opt" value="large">
                        6-8 orang
                      </option>
                    </Input>
                  </FormGroup>
                </div>
                <div className="col-md-3">
                  <FormGroup>
                    <Label for="harga_mobil">harga</Label>
                    <Input
                      disabled={isSubmitted}
                      id="harga_mobil"
                      name="select"
                      type="select"
                      onChange={(e) => setPrice(e.target.value)}
                    >
                      <option hidden>Masukkan harga sewa per hari</option>
                      <option className="opt" value="low">
                        {`< Rp 400.000`}
                      </option>
                      <option className="opt" value="medium">
                        Rp.400.000 - Rp.600.000
                      </option>
                      <option className="opt" value="high">
                        {`> Rp 600.000`}
                      </option>
                    </Input>
                  </FormGroup>
                </div>
                <div className="col-md-3">
                  <FormGroup>
                    <Label for="status_mobil">Status</Label>
                    <Input
                      disabled={isSubmitted}
                      id="status_mobil"
                      name="select"
                      type="select"
                      onChange={(e) => setIsRented(e.target.value)}
                    >
                      <option className="opt" value={true}>
                        Disewa
                      </option>
                      <option className="opt" value={false}>
                        Free
                      </option>
                    </Input>
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              {!isSubmitted ? (
                <button onClick={handleSumbit} className="btn btn-success">
                  Cari Mobil
                </button>
              ) : (
                <button onClick={handleEdit} className="btn btn-primary">
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
        {detailOpen && (
          <div className="container">
            <button onClick={handleBack} className="btn btn-danger backButton">
              kembali
            </button>
          </div>
        )}
      </div>
      {resultOpen && (
        <div className="result">
          <div className="container card position-relative search_content">
            <div className="card-body">
              {isLoading ? (
                <h1>Loading...</h1>
              ) : (
                <Row>
                  {data.map((car) => {
                    return (
                      <Fragment key={car.id}>
                        <Col md={4}>
                          <Card className="mb-4">
                            <CardBody>
                              <div className="wrap_gmbrresult d-flex justify-content-center">
                                <img
                                  className="result_img"
                                  src={car.image}
                                  alt={car.name}
                                />
                              </div>
                              <CardTitle tag="h5">{car.name}</CardTitle>
                              <CardText className="hargaperhari">
                                {formatToIDR(car.price)} / hari
                              </CardText>
                              <CardText className="deskripmbl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sapiente illo, modi
                                dignissimos ducimus autem ullam nobis minus
                                tempora, in, unde ex. Exercitationem incidunt
                                enim, pariatur nostrum fugit quae corrupti
                                eveniet?
                              </CardText>
                              <Button
                                className="tmbl_detail"
                                color="success"
                                onClick={() => {
                                  console.log(car.id);
                                  fetchDataCar(car.id);
                                  setDetailOpen(true);
                                  setResultOpen(false);
                                  setIsSubmitted(true);
                                }}
                                type="button"
                              >
                                Pilih Mobil
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                      </Fragment>
                    );
                  })}
                </Row>
              )}
            </div>
          </div>
        </div>
      )}

      {/* eksperimental */}
      {detailOpen && (
        <div className="container detail">
          <div className="row barisDetail">
            <div className="detail_kiri col-8">
              <div className="card container detailKiriCard">
                <div className="card-body">
                  <p>Tentang Paket</p>
                  <p>Include</p>
                  <ul>
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <p>Exclude</p>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <Accordion flush open={open} toggle={toggle} id="refund">
                    <AccordionHeader className="accordionHeader" targetId="1">
                      Refund, Reschedule, Overtime
                    </AccordionHeader>
                    <AccordionBody className="accordionBody" accordionId="1">
                      <div className="wrap_accordionBody">
                        <ul>
                          <li>
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                          </li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                          <li>
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            Jika overtime lebih dari 12 jam akan ada
                            tambahanbiaya Rp 20.000/jam
                          </li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                          <li>
                            Tidak termasuk biaya makan sopir Rp 75.000/hari
                          </li>
                          <li>
                            Jika overtime lebih dari 12 jam akan ada tambahan
                            biaya Rp 20.000/jam
                          </li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="detail_kanan col-4">
              <div className="card detailKananCard">
                <div className="card-body">
                  <div className="wrap_mbl d-flex justify-content-center">
                    <img
                      className="card-img-top"
                      src={carDetail.image}
                      alt={`Gambar mobil ${carDetail.name}`}
                    />
                  </div>
                  <p className="card-title mb-0">{carDetail.name}</p>
                  <div className="jmlh_org mb-5">
                    <img src={user} alt="icon user" />{" "}
                    {carDetail.category && mappingCategory(carDetail.category)}
                  </div>

                  <div className="total_harga d-flex justify-content-between mb-5">
                    <p>Total</p>
                    <p>{carDetail.price && formatToIDR(carDetail.price)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SearchSection;
