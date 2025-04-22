import React from "react";

import telegram from "../../assets/telegram.svg";

const ResultsPage = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <p className="text-center text-gray-700">
        Hasil tidak tersedia. Silakan selesaikan kuisnya.
      </p>
    );
  }

  const userLevel = answers[0]?.title || "Beginner";

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Rencana English Express untuk kamu: dari level {userLevel} ke fasih
        dalam 30 hari! 🇬🇧✨
      </h1>

      <div className="max-w-lg w-full flex flex-col gap-6">
        {/* Learning Plan */}
        <div className="bg-[#000080] text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Rencana belajar 📘</h2>
          <p>Kursus yang disesuaikan berdasarkan hasil kuismu.</p>
        </div>

        {/* Practice Methods */}
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Metode latihan 🎯</h2>
          <p>Latihan interaktif dan percakapan nyata untuk praktik langsung.</p>
        </div>

        {/* Fast-Track */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">
            Kosakata & tata bahasa praktis 🚀
          </h2>
          <p>Materi yang dirancang untuk situasi nyata sehari-hari.</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-teal-500 text-white font-bold text-lg py-4 px-6 rounded-full hover:bg-teal-600 transition active:scale-95">
        Mulai belajar & menghasilkan sekarang juga!
      </button>

      {/* Telegram Info */}
      <div className="mt-6 flex flex-col items-center">
        <img src={telegram} className="w-12 h-12 mb-2" alt="Telegram Logo" />
        <p className="text-gray-700 text-center">
          Kamu perlu menginstal Telegram untuk menikmati aplikasi ini.
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
