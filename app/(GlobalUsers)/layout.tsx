import MainHeader from "./component/homepage/main-header";
import { FooterSection } from "./component/footer";
import {ClerkProvider} from "@clerk/nextjs"

export default function GlobalUserLayOut( {children} : Readonly<{
    children: React.ReactNode;
  }> ){
    return (
        <ClerkProvider>
            <div>
               <MainHeader />
                {children}
              <FooterSection />
             </div>
      </ClerkProvider>
    )
}