import Counter from "@/components/counter/Counter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <h1>My first next js app</h1>
      <Counter></Counter>
      <Link href="/about">
        <button className="btn btn-accent mt-4">About</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent mt-4 mx-4">News</button>
      </Link>
      <Link href="/contact">
        <button className="btn btn-accent mt-4">Contact</button>
      </Link>
    </div>
  );
};

export default HomePage;
