import React from "react";
import Navbar from "./navbar/page";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="home">
        <div className="home-content">
          <Image src ="/picture.jpeg"
          alt="kiran"
          width={600}
          height={300}
          className="profile-img"
          />
          <h1> Welcome to my portfolio</h1>
          <p>
            Hello! I'm Kiran Mushtaque, a web developer passionate about
            learning and building amazing projects.
          </p>
          <Link href="/contact">
            <button>Contact Me</button>
          </Link>
        </div>
      </main>
    </>
  );
};
export default Home;
