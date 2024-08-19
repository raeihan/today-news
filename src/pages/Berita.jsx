import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDate from "../hooks/useDate";
import Loading from "../components/Loading";

const Berita = (header) => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  const { dayName, date, monthName, years } = useDate();

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  
  const [countBerita, setCountBerita] = useState(6);

  const [loadingBtn, setLoadingBtn] = useState(false);


  const loadBerita = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountBerita((prev) => prev + 6);
      setLoadingBtn(false);
    }, 2000);
  };

  const getBerita = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://berita-indo-api-next.vercel.app/api/cnn-news/${id}`
      );
      setBerita(response.data.data);
    } catch (error) {
      if (error.response.status === 400) {
        navigate("/not-found");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBerita();
  }, [id]);
  return (
    <>
      <Header />
      {loading ? (
        <h2 className="text-center">
        <Loading/>
      </h2>
      ) : (
        <main className="p-5 md:p-10 bg-zinc-900">
          <h2 className="text-center text-xl md:text-2xl font-bold text-white pb-4">
            Berita {location.pathname.substring(1)} - {dayName}, {date}{" "}
            {monthName} {years}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
            {berita.slice(0, countBerita).map((news, index) => (
              <Card news={news} index={index} />
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

export default Berita;
