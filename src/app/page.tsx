import Contact from '../../components/Contact';
import CustomSelect from '../../components/CustomSelect';
import FeatureOne from '../../components/FeatureOne';
import FeatureThree from '../../components/FeatureThree';
import FeatureTwo from '../../components/FeatureTwo';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OurProcess from '../../components/OurProcess';

export default function Home() {
  return (
    <>
      <Header />
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <OurProcess />
      <CustomSelect />
      <Contact />
      <Footer />
    </>
  );
}
