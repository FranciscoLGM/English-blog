"use client";
import React, { useState, useRef } from "react";
import PostCard from "./PostCard";
import PostTag from "./PostTag";
import postsData from "../../../public/data/postData.js";
import { motion, useInView } from "framer-motion";

const PostSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredPosts = postsData.filter((post) => post.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="posts">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Posts
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <PostTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <PostTag
          onClick={handleTagChange}
          name="Audios"
          isSelected={tag === "Audios"}
        />
        <PostTag
          onClick={handleTagChange}
          name="Videos"
          isSelected={tag === "Videos"}
        />
        <PostTag
          onClick={handleTagChange}
          name="Texts"
          isSelected={tag === "Texts"}
        />
        <PostTag
          onClick={handleTagChange}
          name="Mind maps"
          isSelected={tag === "Mind maps"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredPosts.map((post, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
              imgUrl={post.image}
              type={post.type} // audio | video | text | map
              contentUrl={post.contentUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default PostSection;
