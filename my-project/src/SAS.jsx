import FotoTugas from "./assets/17.jpg";
export default function SAS() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 animate-fade-in">
      <img
        src={FotoTugas}
        alt="SAS 24/25"
        className="w-1/2 rounded-lg shadow-lg hover:scale-105 transition duration-1000 ease-in-out"
      />

      <h1 className="text-5xl font-bold mt-4 mb-2 hover:underline transition duration-500 ease-in-out">
        Tugas SAS 24/25 Muhammad Hafidz Aditya Zaini
      </h1>

      <p className="text-lg  hover:text-blue-500 transition duration-850 ease-in-out">
        Tugas ini dibuat oleh Muhammad Hafidz Aditya Zaini di kelas Hafs sesi dua
        dengan pengawas ustadz Rezky Suryana.
      </p>
    </div>
  );
}