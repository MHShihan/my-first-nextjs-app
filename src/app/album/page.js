import Image from "next/image";

const AlbumPage = () => {
  return (
    <div>
      <h2>Image components</h2>
      <Image
        className="w-20 "
        src="https://i.ibb.co/4sN1M7M/shihan.jpg"
        width={500}
        height={500}
        alt="shihan photo"
      ></Image>
    </div>
  );
};

export default AlbumPage;
