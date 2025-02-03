import Blogs from "../Components/Blogs/Blogs";
import ContactForm from "../Components/ContactFrom/ContactForm";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import Gallery from "../Components/Gallery/Gallery";
import HearFromOurProducts from "../Components/HearFromOurProducts/HearFromOurProducts";
import MakingLeaningAdventure from "../Components/MakingLeaningAdventure/MakingLeaningAdventure";
import OurProcess from "../Components/OurProcess/OurProcess";
import OurResult from "../Components/OurResult/OurResult";
import Sectionheading from "../Components/Sectionheading/Sectionheading";
import WhyUs from "../Components/whyUs/WhyUs";
import Layout from "../Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <MakingLeaningAdventure />
      <WhyUs />
      <OurProcess />
      <OurResult />
      <HearFromOurProducts />
      <Gallery />
      <Blogs/>
      <Features/>
      <ContactForm/>
      <Footer/>
    </Layout>
  );
}
