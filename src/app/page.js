// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <h1 className="text-2xl font-bold">Home Page</h1>
//     </div>
//   );
// }

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Restaurant from "../components/Restaurant";
import Canopy from "../components/CanopyRentals";
import Events from "../components/Events";
import Catering from "../components/Catering";
import Interior from "../components/InteriorDecoration";
import Halls from "../components/MeetingHalls";
import VIP from "../components/VipSessions";
import Kitchen from "../components/KitchenDelivery";
import PS5 from "../components/Ps5";
import Snooker from "../components/Snooker";
import Contact from "../components/Contact";
import Meals from "../components/Meals";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Meals />
      <About />
      <Restaurant />
      <Canopy />
      <Events />
      <Catering />
      <Interior />
      <Halls />
      <VIP />
      <Kitchen />
      <PS5 />
      <Snooker />
      <Contact />
      <Footer />
    </>
  );
}
