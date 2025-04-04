
import Hero from "./blocks/hero";
import ListNoticias from "./blocks/listnoticias";
import VideoSection from "./blocks/videosection";
import { MainMap } from "./blocks/interactivemapppal";

export default function Home() {
  return (
    <div className="grid">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <Hero></Hero>
         <VideoSection></VideoSection>
         <MainMap></MainMap>
         <ListNoticias></ListNoticias>
       </main>
    </div>
  );
}