import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PenyakkiPage() {
  const videos = [
    { id: 1, src: "/videos/q1 (1).mp4", title: "Penyakki Video #1" },
    { id: 2, src: "/videos/q1 (2).mp4", title: "Penyakki Video #2" },
    { id: 3, src: "/videos/q1 (3).mp4", title: "Penyakki Video #3" },
    { id: 4, src: "/videos/q1 (4).mp4", title: "Penyakki Video #4" },
    { id: 5, src: "/videos/q1 (5).mp4", title: "Penyakki Video #5" },
    { id: 6, src: "/videos/q1 (6).mp4", title: "Penyakki Video #6" },
    { id: 7, src: "/videos/q1 (7).mp4", title: "Penyakki Video #7" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Full Penyakki Collection</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Watch and enjoy our legendary penyakki moments!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="aspect-video bg-black rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group relative"
            >
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                playsInline
                controlsList="nodownload"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:opacity-0 transition-opacity pointer-events-none">
                <div className="text-white text-xl font-medium">
                  {video.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
} 