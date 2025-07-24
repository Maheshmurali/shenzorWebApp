import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div>
        {children}
        <ToastContainer position="top-center" theme="dark"/>
       </div>
   </ClerkProvider>
  );
}
