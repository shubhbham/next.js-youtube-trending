import React from "react";
import DarkModeButton from "../Components/DarkMode";
import Image from "next/image";
import youtube1 from "../Assets/youtube1.svg";
import youtube2 from "../Assets/youtube2.svg";
import youtube3 from "../Assets/youtube3.svg";
import youtube4 from "../Assets/youtube4.svg";

const page = () => {
  return (
    <>
      
      <DarkModeButton />
      <div>
        <p className="m-5 font-normal text-2xl sm:text-xl">
          YouTube Trends encapsulate the dynamic pulse of the digital era,
          showcasing a diverse tapestry of content that captivates global
          audiences. From viral challenges to groundbreaking music releases,
          YouTube Trends reflects the ever-evolving landscape of online
          creativity and user engagement. Dive into a world where trending
          videos transcend borders, connecting people across cultures through
          shared laughter, inspiration, and discovery. Experience the power of
          user-generated content as it shapes and mirrors societal trends, from
          the latest dance crazes to thought-provoking commentary on pressing
          issues. Discover the hottest creators, channels, and genres that
          dominate the platform, reflecting the collective interests of
          millions. YouTube Trends is a kaleidoscope of entertainment, where
          gaming, lifestyle, education, and entertainment intertwine to create
          an immersive digital experience. Stay ahead of the curve as YouTube
          Trends unveils emerging voices, breakout stars, and innovative formats
          that redefine online entertainment. Explore the intersection of
          technology and creativity as influencers push boundaries, bringing new
          perspectives and ideas to the forefront of the digital landscape.
          Whether you seek to be entertained, informed, or inspired, YouTube
          Trends is your gateway to the cultural zeitgeist. Join the global
          community in celebrating the creativity and diversity that define
          YouTube Trends, where every click opens a door to a world of endless
          possibilities. Embark on a journey through the vast YouTube ecosystem,
          where trends emerge and evolve, shaping the online narrative and
          influencing the conversations that resonate across the globe. YouTube
          Trends — where the world comes together to share, create, and
          celebrate the spirit of digital innovation.
        </p>
        <div className="flex h-10 w-11 sm:space-x-80 m-7 mt-14 space-x-16">
         <Image src={youtube1}/>
         <Image src={youtube2}/>
         <Image src={youtube3}/>
         <Image src={youtube4}/>
        </div>
      </div>
    </>
  );
};

export default page;
