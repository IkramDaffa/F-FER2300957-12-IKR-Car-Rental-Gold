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
} from "reactstrap";
import Select from "react-select";
import { Fragment, useState } from "react";
import { API } from "../../../common/API";

function searchSection() {
  const [nameCar, setNameCar] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isRented, setIsRented] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [idCar, setIdCar] = useState("");
  const [carDetail, setCarDetail] = useState([]);

  const fetchDataCar = (id) => {
    API.get(`admin/car/${id}`)
      .then((res) => {
        setCarDetail(res.data);
        console.log(carDetail);
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
  const formatToIDR = (idr) => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${"Rp. "}${parsed}`;
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsLoading(true);
    fetchData();
    // console.log(data);
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
              <button onClick={handleSumbit} className="btn btn-success">
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
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
                        <Card>
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
                              {car.price}/hari
                            </CardText>
                            <CardText className="deskripmbl">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Sapiente illo, modi dignissimos ducimus
                              autem ullam nobis minus tempora, in, unde ex.
                              Exercitationem incidunt enim, pariatur nostrum
                              fugit quae corrupti eveniet?
                            </CardText>
                            <Button
                              className="tmbl_detail"
                              color="success"
                              onClick={() => {
                                console.log(car.id);
                                // setIdCar(car.id);
                                fetchDataCar(car.id);
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
    </>
  );
}
export default searchSection;
