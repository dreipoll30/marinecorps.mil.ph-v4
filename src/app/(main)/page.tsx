
import { Swiper } from "swiper/react";
import Header from "../components/header";
import HeaderSlide from "../components/headerSlide";
import { SectionHeading, SectionHeadingWrapper } from "../components/section";
import { Shelf, ShelfBlock, ShelfWrapper } from "../components/shelf";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";
import Citemars from "../components/citemars";
import { Features } from "../components/features";
import Highlights from "../components/highlights";
import RecentNews from "../components/recent-news";
import Footer from "../components/footer";
import Invitation from "../components/invitation";
import LogoWall from "../components/logowall";
import NavigationBar from "../components/navigation";

interface CitemarsProps {

}

export default function Page() {
  return (
    <>
      <NavigationBar />
      <Header>
        <HeaderSlide />
      </Header>
      <Shelf>
        <ShelfWrapper>
          <SectionHeadingWrapper>
            <SectionHeading title="Recent CITEMAR6" />
          </SectionHeadingWrapper>
          <ShelfBlock >
            <Citemars />
          </ShelfBlock>
        </ShelfWrapper>
      </Shelf>
      <Features />
      <Highlights />
      <RecentNews />
      <Invitation />
      <LogoWall />
      <Footer />
    </>
  );
}