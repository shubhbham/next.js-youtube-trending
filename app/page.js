import DarkModeButton from "./Components/DarkMode";
import Trending from "./Components/Trending";

export default function Home() {
  return (
    <>
      <div className="select-none">
        {/* <Navbar/> */}
        <DarkModeButton />
      </div>
      <div>
        <Trending />
      </div>
    </>
  );
}

// import DarkModeButton from "./Components/DarkMode";

// const url = 'https://youtube-search-and-download.p.rapidapi.com/trending?type=mu&hl=en&gl=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '50b29a5b07msh610d84c8818ba41p1820cdjsne1d3db4ba41f',
// 		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// export default function Home() {
//   return (
//     <>
//       <div>

//       </div>

//       <DarkModeButton />
//     </>
//   );
// }
