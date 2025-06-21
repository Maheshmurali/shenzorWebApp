import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div>
        {children}
       </div>
   </ClerkProvider>
  );
}
