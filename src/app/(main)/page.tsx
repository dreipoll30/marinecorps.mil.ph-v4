
import { Swiper } from "swiper/react";
import Header from "../components/header";
import HeaderSlide from "../components/headerSlide";
import { SectionHeading } from "../components/section";
import { Shelf, ShelfBlock, ShelfWrapper } from "../components/shelf";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";
import Citemars from "../components/citemars";

interface CitemarsProps {

}

export default function Page() {
  return (
    <>
      <Header>
        <HeaderSlide />
      </Header>
      <Shelf>
        <ShelfWrapper>
          <SectionHeading title="Recent CITEMAR6" />
          <ShelfBlock>
            <Citemars />
          </ShelfBlock>
        </ShelfWrapper>
      </Shelf>
    </>
  );
}