"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const images = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Weight training area with modern equipment",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Cardio section with treadmills and ellipticals",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Yoga studio with natural lighting",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Group fitness class in session",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Personal training session",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Recovery area with stretching equipment",
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative aspect-video w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
