import { useState, useEffect, useRef } from "react"
import { PROJECTS } from "@/content/projects"
import ProjectCard from "./ProjectCard"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ProjectSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const slideshowRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1
    )
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 300)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [isAnimating])

  // Touch/swipe support
  useEffect(() => {
    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = startY - endY

      // Only trigger if horizontal swipe is greater than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          goToNext()
        } else {
          goToPrevious()
        }
      }
    }

    const slideshow = slideshowRef.current
    if (slideshow) {
      slideshow.addEventListener('touchstart', handleTouchStart)
      slideshow.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (slideshow) {
        slideshow.removeEventListener('touchstart', handleTouchStart)
        slideshow.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isAnimating])

  const currentProject = PROJECTS[currentIndex]

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto px-4" ref={slideshowRef}>
      {/* Navigation Controls */}
      <div className="relative flex justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          disabled={isAnimating}
          className="flex items-center gap-2"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        
        <span className="absolute left-1/2 transform -translate-x-1/2 text-sm text-slate-600 dark:text-slate-400 font-medium">
          {currentIndex + 1} of {PROJECTS.length}
        </span>
        
        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          disabled={isAnimating}
          className="flex items-center gap-2"
          aria-label="Next project"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Project Display */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <ProjectCard
            image={PROJECTS[currentIndex].image}
            title={PROJECTS[currentIndex].title}
            description={PROJECTS[currentIndex].description}
            tags={PROJECTS[currentIndex].tags}
            links={PROJECTS[currentIndex].links}
          />
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-slate-800 dark:bg-slate-200 scale-125'
                : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectSlideshow
