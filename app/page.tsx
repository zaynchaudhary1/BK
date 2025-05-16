import { MemberCard } from "@/components/member-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  const members = [
    {
      name: "Hassan Shauka",
      nickname: "Shauki,Chacha shuddi,huge ass,nunu 0%",
      id: "hassan",
      imageSrc: "/images/hassan.jpeg",
      cgpa: "Bund paar"
    },
    {
      name: "POP G",
      nickname: "POP G, Almashur-Bonda G, Zung Alood",
      id: "popg",
      imageSrc: "/images/pop.jpeg",
      cgpa: "1.5 inch"
    },
    {
      name: "Ganja Don",
      nickname: "Ganja Don,Tind ali sarkar, Bald ass niggga",
      id: "ganja",
      imageSrc: "/images/ganja.jpeg",
      cgpa: "0.8"
    },
    {
      name: "Theepa",
      nickname: "Theepa",
      id: "Lord Shoon",
      imageSrc: "/images/theepa.jpeg",
      cgpa: "warning"
    },
    {
      name: "Zahid Ramda",
      nickname: "Never Say no to Nasha",
      id: "zahid",
      imageSrc: "/images/zahid.jpeg",
      cgpa: "Takreebn Suspend"
    },
    {
      name: "Jamjad",
      nickname: "Jamjad kutti",
      id: "jamjad",
      imageSrc: "/images/jamjad.jpeg",
      cgpa: "Abbe ny bund marti"
    },
    {
      name: "Kassana",
      nickname: "Kassana Sab",
      id: "kassana",
      imageSrc: "/images/kassana.jpeg",
      cgpa: "Chauka"
    },
    {
      name: "Musa",
      nickname: "Musa Sab",
      id: "musa",
      imageSrc: "/images/musa.jpeg",
      cgpa: ""
    },
    {
      name: "Zain",
      nickname: "VIPPP",
      id: "zain",
      imageSrc: "/images/zayn.jpg",
      cgpa: "Warning"
    }
  ]

  const exMembers = [
    {
      name: "Gujjar",
      nickname: "Gujjar Bhai",
      id: "gujjar",
      imageSrc: "/images/gujjar.jpeg",
      cgpa: "Suspended"
    },
    {
      name: "ubair",
      nickname: "14 of aesthetic",
      id: "zubair",
      imageSrc: "/images/ubair.jpeg",
      cgpa: "Phone"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">GEO SANGI G</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            NA FIKAR NA FAAKA BUND MARWAY SHAKA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberCard
              key={member.id}
              name={member.name}
              nickname={member.nickname}
              index={index}
              imageSrc={member.imageSrc}
              cgpa={member.cgpa}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Ex Members</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            They were part of our journey. Once a Bakchod, always a Bakchod!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exMembers.map((member, index) => (
            <MemberCard
              key={member.id}
              name={member.name}
              nickname={member.nickname}
              index={index}
              imageSrc={member.imageSrc}
              cgpa={member.cgpa}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <Link href="/penyakki">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-2xl font-bold px-12 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none">
              Click for Full Penyakki Collection 🎥
            </button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
