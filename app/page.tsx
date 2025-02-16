import { Announcements } from "./component/homepage/announcements";
import ClientList from "./component/homepage/clients";
import Captions from "./component/homepage/header-section-1/caption";
import HeaderCards from "./component/homepage/header-section-card/header-section-card";
import HomeProductPallet from "./component/homepage/home-product-pallet";
import Productsslide from "./component/homepage/productslide";
import CustomersReviews from "./component/homepage/reviews";

export default function Home() {
  return (
    <main className=""> 
    <Captions />
    <HeaderCards />
    <ClientList />
    <HomeProductPallet />
    <Productsslide />
    <CustomersReviews />
    <Announcements />
    </main>
  );
}
