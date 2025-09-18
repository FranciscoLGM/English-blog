import React, { useState } from "react";
import {
  PlayIcon,
  VideoCameraIcon,
  FilmIcon,
  DocumentTextIcon,
  MapIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const PostCard = ({ imgUrl, title, description, type, contentUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Render dinámico del contenido
  const renderContent = () => {
    switch (type) {
      case "audio":
        return (
          <audio controls className="w-full">
            <source src={contentUrl} type="audio/mpeg" />
          </audio>
        );
      case "video":
        return (
          <video controls className="w-full rounded-lg">
            <source src={contentUrl} type="video/mp4" />
          </video>
        );
      case "youtube":
        return (
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={contentUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "text":
        return (
          <iframe
            src={contentUrl}
            className="w-full h-96 border rounded-lg"
            title={title}
          />
        );
      case "map":
        return (
          <iframe
            src={contentUrl}
            className="w-full h-96 border rounded-lg"
            title={title}
          />
        );
      default:
        return null;
    }
  };

  // Íconos para portada
  const renderIcon = () => {
    switch (type) {
      case "audio":
        return <PlayIcon className="h-6 w-6 text-[#ADB7BE]" />;
      case "video":
        return <VideoCameraIcon className="h-6 w-6 text-[#ADB7BE]" />;
      case "youtube":
        return <FilmIcon className="h-6 w-6 text-[#ADB7BE]" />;
      case "text":
        return <DocumentTextIcon className="h-6 w-6 text-[#ADB7BE]" />;
      case "map":
        return <MapIcon className="h-6 w-6 text-[#ADB7BE]" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Tarjeta */}
      <div
        className="bg-[#181818] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div
          className="h-40 md:h-52 relative"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 p-2 rounded-full">
            {renderIcon()}
          </div>
        </div>
        <div className="text-white p-4">
          <h5 className="text-lg font-semibold mb-1">{title}</h5>
          <p className="text-[#ADB7BE] text-sm">{description}</p>
        </div>
      </div>

      {/* Modal con animación y glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center 
                       bg-black/40 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1f1f1f]/90 backdrop-blur-md rounded-xl 
                         max-w-3xl w-full p-6 relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-400"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Contenido */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {title}
              </h3>
              <div>{renderContent()}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PostCard;
