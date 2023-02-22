import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      .
      <Image
        // src={author.photo.url}
        // alt={author.name}
        unoptimized
        height="100px"
        width="100px"
        className="align-middle rounded-full"
      />
      {/* <h3 className="text-white my-4 text-xl font-bold">AUTHOR</h3>
      <p className="text-white text-lg">{author.bio}</p> */}
    </div>
  );
};

export default Author;
