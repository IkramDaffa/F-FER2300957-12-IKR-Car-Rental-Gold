import { useState } from "react";
import {
  Container,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
function FaqSection() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <Container className="faq" id="FAQ">
      <div className="jdl_faq">
        <div className="wrap_judul">
          <p className="judul">Frequently Asked Question</p>
          <p className="deskripsi">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      <div className="faq_content">
        <Accordion flush open={open} toggle={toggle} id="faqAccordion">
          <AccordionItem className="pb-4 faq_item">
            <AccordionHeader targetId="1" className="border border-dark">
              Apa saja syarat yang dibutuhkan?
            </AccordionHeader>
            <AccordionBody accordionId="1" className="border">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              aperiam ducimus adipisci eum animi accusantium ut inventore itaque
              mollitia laborum. Culpa corrupti sint atque quasi fugit hic rerum
              expedita voluptate!
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="pb-4 faq_item">
            <AccordionHeader targetId="2" className="border border-dark">
              Berapa hari minimal sewa mobil lepas kunci?
            </AccordionHeader>
            <AccordionBody accordionId="2" className="border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ut nisi tenetur, praesentium eius earum nam corporis cumque
              repellat obcaecati quas, quibusdam consequatur. Ad, nisi! Eaque
              eum maiores in consequuntur.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="pb-4 faq_item">
            <AccordionHeader targetId="3" className="border border-dark">
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </AccordionHeader>
            <AccordionBody accordionId="3" className="border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              dolore? Eveniet aliquam explicabo quasi incidunt distinctio fugiat
              dolorem ipsam. Magnam quis labore repellendus iste sunt quo itaque
              tenetur vel eveniet.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="pb-4 faq_item">
            <AccordionHeader targetId="4" className="border border-dark">
              Apakah Ada biaya antar-jemput?
            </AccordionHeader>
            <AccordionBody accordionId="4" className="border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur minima recusandae saepe. Cumque repudiandae magnam,
              esse excepturi eius architecto saepe voluptates ipsa consectetur
              voluptate accusantium ut, aliquid nobis maiores in.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="pb-4 faq_item">
            <AccordionHeader targetId="5" className="border border-dark">
              Bagaimana jika terjadi kecelakaan?
            </AccordionHeader>
            <AccordionBody accordionId="5" className="border">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              aliquid dolor, id quas quos ipsum illo, magnam quisquam rerum qui
              numquam corrupti ab consectetur tempore non quod odio molestias
              doloremque.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  );
}
export default FaqSection;
