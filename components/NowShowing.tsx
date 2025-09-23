import Image from "next/image";

export default function NowShowing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
      <Image src="/img1.jpg" alt="Imagen 1" width={400} height={192} className="rounded-lg shadow-md w-full h-48 object-cover"/>
      <Image src="/img2.jpg" alt="Imagen 2" width={400} height={192} className="rounded-lg shadow-md w-full h-48 object-cover"/>
      <Image src="/img3.jpg" alt="Imagen 3" width={400} height={192} className="rounded-lg shadow-md w-full h-48 object-cover"/>
    </div>
  );
}