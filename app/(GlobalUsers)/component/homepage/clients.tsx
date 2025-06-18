import Image from "next/image";
import nwc from '@/assets/nwc.png';
import nabatat from '@/assets/n.png';
import amana from '@/assets/amana.png';
import modon from '@/assets/modon.png';
import alajmi from '@/assets/alajmi.png';
import ywp from '@/assets/ywp.png';
import shalfa from '@/assets/shalfa.png';
import cwc from '@/assets/cwc.png';

const clients = [
  {
    name: "National Water Company",
    url: "https://www.nwc.com.sa/English/pages/default.aspx",
    logo: nwc,
  },
  {
    name: "Nabatat",
    url: "https://www.nabatat.com.sa/",
    logo: nabatat,
  },
  {
    name: "Eastern Amana",
    url: "https://www.eamana.gov.sa/",
    logo: amana,
  },
  {
    name: "MODON",
    url: "https://modon.gov.sa/en/Pages/default.aspx",
    logo: modon,
  },
  {
    name: "Al Ajmi Company",
    url: "https://alajmicompany.com/",
    logo: alajmi,
  },
  {
    name: "Yamama Water Project",
    url: "https://yc.com.sa/en",
    logo: ywp,
  },
  {
    name: "Shalfa Contracting",
    url: "https://shalfa.sa/",
    logo: shalfa,
  },
  {
    name: "Civil Works Company",
    url: "https://www.cwc.com.sa/",
    logo: cwc,
  },
];

export default function ClientList() {
  return (
    <div className="bg-drakGray mt-4 rounded-md py-8">
      <div className="text-black text-3xl py-4 w-full text-center">
        <h2 className="text-white">
          <span className="text-main text-4xl">O</span>ur Major Clients
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 gap-x-4 items-center py-8">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={150}
                  className="grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
