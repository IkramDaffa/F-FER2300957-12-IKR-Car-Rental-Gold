import "../../../style/carDetail.css";
import mobil from "../../../assets/img/image 1.png";
import user from "../../../assets/icon/fi_users.png";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
function carDetailSection() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="container detail">
      <div className="row barisDetail">
        <div className="detail_kiri col-6">
          <div className="card">
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
                <li>
                  Tidak termasuk biaya makan sopir Rp 75.000/hari Jika overtime
                </li>
                <li>
                  lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam Tidak
                </li>
                <li>termasuk akomodasi penginapan</li>
              </ul>
              <Accordion flush open={open} toggle={toggle} id="refund">
                <AccordionHeader className="accordionHeader" targetId="1">
                  Refund, Reschedule, Overtime
                </AccordionHeader>
                <AccordionBody className="accordionBody" accordionId="1">
                  <div className="wrap_accordionBody">
                    <ul>
                      <li>
                        Tidak termasuk biaya makan sopir Rp 75.000/hari Jika
                        overtime
                      </li>
                      <li>
                        lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                        Tidak
                      </li>
                      <li>
                        termasuk akomodasi penginapan Tidak termasuk biaya makan
                        sopir
                      </li>
                      <li>
                        Rp 75.000/hari Jika overtime lebih dari 12 jam akan ada
                        tambahan
                      </li>
                      <li>
                        biaya Rp 20.000/jam Tidak termasuk akomodasi penginapan
                        Tidak
                      </li>
                      <li>
                        termasuk biaya makan sopir Rp 75.000/hari Jika overtime
                        lebih
                      </li>
                      <li>
                        dari 12 jam akan ada tambahan biaya Rp 20.000/jam Tidak
                        termasuk
                      </li>
                      <li>akomodasi penginapan</li>
                    </ul>
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="detail_kanan col-6">
          <div className="card">
            <div className="card-body">
              <div className="wrap_mbl d-flex justify-content-center">
                <img
                  className="card-img-top"
                  src={mobil}
                  alt="gambar mobil hasil pencarian"
                />
              </div>
              <p className="card-title mb-0">Innova</p>
              <div className="jmlh_org mb-5">
                <img src={user} alt="icon user" /> 6 - 8 Orang
              </div>
              <div className="total_harga d-flex justify-content-between mb-5">
                <p>Total</p>
                <p>Rp.500.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default carDetailSection;
