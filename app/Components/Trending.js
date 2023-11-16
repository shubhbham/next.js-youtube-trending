"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";
import Link from "next/link";

export default function Home() {
  //   const [apiData, setApiData] = useState(null);
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("IN"); // Default country
  const [selectedType, setSelectedType] = useState("mo"); // Default type
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  // Create a flag to track if the button was clicked
  // const [fetchDataButtonClicked, setFetchDataButtonClicked] = useState(false);

  // Combine the base YouTube URL with the videoId

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true when fetching data

    async function fetchData() {
      const url = `https://youtube-search-and-download.p.rapidapi.com/trending?type=${selectedType}&hl=en&gl=${selectedCountry}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "50b29a5b07msh610d84c8818ba41p1820cdjsne1d3db4ba41f", // Replace with your actual RapidAPI key
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const result = await response.json();
          setApiData(result);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [selectedType, selectedCountry]);

  // Handle country selection change
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // // Handle type selection change
  // const handleTypeChange = (event) => {
  //   setSelectedType(event.target.value);
  // };

  const handleTypeChange = (event, videoId) => {
    event.preventDefault();
    setSelectedVideoId(videoId);
  };

  return (
    <div className="select-none">
      <div className="mb-5 mt-2 text-xs">
        <label className="px-5 font-bold">
          <span className="text-red-500">Select </span>Your Country:
        </label>
        <select
          className="rounded-md h-6 text-amber-500"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="US">United States</option>
          <option value="IN">India</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="JP">Japan</option>
          <option value="BR">Brazil</option>
          <option value="IT">Italy</option>
          <option value="ES">Spain</option>
          <option value="MX">Mexico</option>
          <option value="KR">South Korea</option>
          <option value="RU">Russia</option>
          <option value="SA">Saudi Arabia</option>
          <option value="ZA">South Africa</option>
          <option value="AR">Argentina</option>
          <option value="TR">Turkey</option>
          <option value="SE">Sweden</option>
          {/* Add more country options as needed */}
        </select>
      </div>

      <div className="mb-5 text-xs">
        <label className="px-5 font-bold">
          <span className="text-red-500">Select</span> Your Choice :
        </label>
        <select
          className="rounded-md h-6 text-amber-500"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="n">Now</option>
          <option value="mu">Music</option>
          <option value="mo">Movies</option>
          <option value="g">Gaming</option>
        </select>
      </div>

      {isLoading ? (
        // this is spinner you can use it if you want .
        // <p className="text-center mt-10 font-bold text-amber-400">
        //   <span
        //     className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        //     role="status"
        //   >
        //     <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        //     </span>
        //   </span>
        // </p>
        <Loader />
      ) : (
        <div className="card-container mb-10">
          {apiData && apiData.contents ? (
            apiData.contents.map((item, index) => (
              // Inside the map function in the card rendering block
              <div key={index} className="card rounded-lg shadow-md">
                <div className="video-container">
                  {/* <iframe
                    className="video-iframe"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.video.videoId}`}
                    title="YouTube Video Player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe> */}
                  <iframe
                    className="video-iframe"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.video.videoId}?modestbranding=1`}
                    title="YouTube Video Player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="pt-5">
                  {item.video.publishedTimeText} | {item.video.lengthText}
                  <span className="text-amber-500"> min</span>
                  <span className="px-4">{item.video.viewCountText}</span>
                </p>
                <h3 className="text-sm">{item.video.title}</h3>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </div>
  );
}
