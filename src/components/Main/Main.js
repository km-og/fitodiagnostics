import Promo from "../Promo/Promo";
import Purchase from "../Purchase/Purchase";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import Services from "../Services/Services";

function Main() {
  return (
    <>
      <ScrollToTopOnMount />
      <Promo />
      <Services />
      <Purchase />
    </>
  );
}

export default Main;
