import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Slide {
  title: string;
  description: string;
}

const slides: Slide[] = [
  { title: "Titolo 1", description: "Descrizione del primo elemento." },
  { title: "Titolo 2", description: "Testo del secondo elemento." },
  { title: "Titolo 3", description: "Contenuto del terzo elemento." },
  { title: "Titolo 4", description: "Informazioni del quarto elemento." },
  { title: "Titolo 5", description: "Ancora un altro elemento." },
  { title: "Titolo 6", description: "Ultimo elemento della serie." },
];

const Carousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / 4 + 24; // item width + gap
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (direction === "left") {
        if (container.scrollLeft <= 0) {
          // Vai alla fine
          container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      } else {
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 10
        ) {
          // Torna all'inizio
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (container) {
      isDragging.current = true;
      container.classList.add("cursor-grabbing");
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    containerRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!isDragging.current || !container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    container.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="w-full px-4">
      {/* Navigation buttons */}
      <div className="flex justify-end gap-10 mb-4">
        <button
          onClick={() => scroll("left")}
          className="btn btn-outline hover:border-darkPurple hover:bg-transparent  text-darkText hover:text-darkPurple font-normal px-4 py-2 rounded-lg border-2"
        >
          <FaArrowLeft size={16} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="btn btn-outline hover:border-darkPurple hover:bg-transparent  text-darkText hover:text-darkPurple font-normal px-4 py-2 rounded-lg border-2"
        >
          <FaArrowRight size={16} />
        </button>
      </div>

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth space-x-6 scrollbar-hide cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(25%-18px)] bg-blue-100 p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              {slide.title}
            </h2>
            <p className="text-blue-800 text-sm">{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
