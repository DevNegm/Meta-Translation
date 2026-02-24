'use client'
import About from "@/components/about";
import BackToTop from "@/components/back-to-top";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Service from "@/components/service";
import Services from "@/components/services";
import Team from "@/components/team";
import Video from "@/components/video";
import Work from "@/components/work";
import { getMainData } from "@/lib/main";
import { useQuery } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";

export default function Home() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["main-data"],
    queryFn: getMainData,
  });


  if (isLoading) {
    return (
      <main className="w-full h-screen flex items-center justify-center bg-black">
        <SyncLoader color="white" />
      </main>
    )
  }

  if (isError) {
    return (
      <main className="w-full h-screen flex items-center justify-center bg-black">
          <p className="text-center max-w-3xl text-zinc-300">Something went wrong, please try again</p>
      </main>
    )
  }


  return (
    <main className="flex flex-col lg:gap-40 gap-20 relative">
      <Navbar />
      <Header data={data} />
      <About data={data} />
      <Services data={data} />
      <Service data={data} />
      <Clients data={data} />
      <Work data={data} />
      <Team data={data} />
      <Video data={data} />
      <Contact data={data} />
      <Footer data={data} />
      <BackToTop/>
    </main>
  );
}
