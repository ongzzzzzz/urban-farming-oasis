import Image from 'next/image'
import NavBar from '../components/navbar';

export default function Result() {

  return (
    <>
      <div style={{ height: "calc(100vh - 70px)", backgroundColor: "#FAF4DF" }}
        className="flex flex-col items-center justify-center">
        <div className="my-2 w-10/12 text-3xl font-bold text-left">Recommended Crop</div>
        <Image src="https://source.unsplash.com/random/300x300/?cucumber" alt="Cucumber"
          width={300} height={300}
          className="rounded-t-lg w-10/12"
        />
        <div className="bg-white rounded-b-lg w-10/12 text-center text-3xl font-bold p-2">Cucumber</div>
        <div className="w-10/12 text-left py-2 px-4">
          <div className="text-lg">Comments:</div>
          <ul className="list-disc list-inside">
            <li>50-70days from planting seeds to reach maturity and get ready to harvest!</li>
            <li>Adequate sunlight, warmth, consistent watering, and good soil fertility are crucial.</li>
          </ul>
        </div>
      </div>
      <NavBar />
    </>
  )
}
