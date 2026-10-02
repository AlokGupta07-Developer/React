import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://picsum.photos/v2/list?page=3&limit=100",
      );

      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 text-white sm:p-6 lg:p-10">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-7xl">
        <h1 className="text-center text-3xl font-bold sm:text-4xl">
          Picsum Gallery
        </h1>

        <p className="mt-2 text-center text-gray-400">
          {userData.length} images available
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex min-h-60 items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-400">
            Loading images...
          </h2>
        </div>
      ) : (
        /* Images */
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {userData.map((elem) => {
            return (
              <div
                key={elem.id}
                className="overflow-hidden rounded-xl bg-white text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
              >
                <img
                  src={elem.download_url}
                  alt={elem.author}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />

                <div className="p-3">
                  <p className="truncate text-base font-bold">{elem.author}</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Image ID: {elem.id}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
