"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X, ZoomIn, ZoomOut, RotateCw } from "lucide-react"

interface MemberCardProps {
  name: string
  nickname: string
  index: number
  imageSrc: string
  cgpa: string
}

export function MemberCard({ name, nickname, index, imageSrc, cgpa }: MemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showFullImage, setShowFullImage] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)

  // Calculate a unique gradient for each member - using dark colors
  const gradients = [
    "from-gray-900 to-gray-700",
    "from-zinc-900 to-zinc-700",
    "from-stone-900 to-stone-700",
    "from-neutral-900 to-neutral-700",
    "from-slate-900 to-slate-700",
    "from-gray-800 to-gray-600",
    "from-zinc-800 to-zinc-600",
    "from-stone-800 to-stone-600",
    "from-neutral-800 to-neutral-600",
  ]

  const gradient = gradients[index % gradients.length]

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5))
  const handleRotate = () => setRotation(prev => (prev + 90) % 360)
  const handleDialogClose = () => {
    setShowFullImage(false)
    setZoom(1)
    setRotation(0)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-800`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`h-80 relative overflow-hidden cursor-zoom-in`}
          onClick={() => setShowFullImage(true)}
        >
          <Image 
            src={imageSrc || "/placeholder.svg"} 
            alt={name} 
            fill 
            className="object-cover object-center scale-110" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 6}
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <p className="text-white/70 mb-2">{nickname}</p>
          <p className="text-emerald-400 font-semibold mb-4">CGPA: {cgpa}</p>

          <div className={`overflow-hidden transition-all duration-300 ${isHovered ? "max-h-24" : "max-h-0"}`}>
            <p className="text-white/80 text-sm">
              Click the photo to view in full size
            </p>
          </div>
        </div>
      </motion.div>

      <Dialog open={showFullImage} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-7xl p-0 overflow-hidden bg-black/95">
          <div className="relative w-full h-[90vh] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={name}
                fill
                className="object-contain transition-all duration-300"
                quality={100}
                priority
                style={{ 
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                }}
              />
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleRotate}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
              >
                <RotateCw size={20} />
              </button>
              <DialogClose className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all">
                <X size={20} />
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
