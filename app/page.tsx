import { FooterSection } from "./component/footer";
import { Announcements } from "./component/homepage/announcements";
import ClientList from "./component/homepage/clients";
import Captions from "./component/homepage/header-section-1/caption";
import HeaderCards from "./component/homepage/header-section-card/header-section-card";
import { MessagesPage } from "./component/homepage/messages";
export default function Home() {
  return (
    <main className=""> 
    <Captions />
    <HeaderCards />
    <ClientList />
    <MessagesPage />
    <Announcements />
    <FooterSection />
    </main>
  );
}
