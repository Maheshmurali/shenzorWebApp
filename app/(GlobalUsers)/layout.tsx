import MainHeader from "./component/homepage/main-header";
import { FooterSection } from "./component/footer";

export default function GlobalUserLayOut( {children} : Readonly<{
    children: React.ReactNode;
  }> ){
    return (
        <div>
             <MainHeader />
                {children}
             <FooterSection />
        </div>
      
    )
}