import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import useDate from "../hooks/useDate";
import useBerita from "../hooks/useBerita";
import Loading from "../components/Loading";
import { useState } from "react";

const Home = () => {
  const { dayName, date, monthName, years } = useDate();

  const { berita, loading } = useBerita();

  const [countBerita, setCountBerita] = useState(6);

  const [loadingBtn, setLoadingBtn] = useState(false);

  const loadBerita = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountBerita((prev) => prev + 6);
      setLoadingBtn(false);
    }, 2000);
  };

  return (
    <>
      <Header />
      {loading ? (
        <h2 className="text-center">
          <Loading />
        </h2>
      ) : (
        <main className="p-5 md:p-10 bg-zinc-900">
          <h2 className=" text-sm md:text-sm font-medium text-white">
            Berita Hari Ini - {dayName}, {date} {monthName} {years}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
            {berita.slice(0, countBerita).map((news, index) => (
              <Card news={news} index={index} berita={berita} />
            ))}
          </div>
          <div className="flex justify-center">
            {loadingBtn ? (
              <h2 className="text-center">
              <Loading />
            </h2>
            ) : (
              <button className="text-white p-4 mt-2 bg-red-500 rounded-xl text-xs" onClick={loadBerita}>Lihat Berita Lainnya</button>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
