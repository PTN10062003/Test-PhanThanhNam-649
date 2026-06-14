import Navigation from "@/components/Navigation";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-neutral-950 md:pl-56">
        {videos.map((video) => (
          <section
            key={video.id}
            className="flex h-dvh snap-start snap-always items-center justify-center"
          >
            <VideoCard video={video} />
          </section>
        ))}
      </main>
    </>
  );
}