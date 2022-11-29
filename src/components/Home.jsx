import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Amrita Padhy</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>
      <div className="home_2">
        <img src={vg} alt="" />
        <div className="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Illo, odit rem voluptate libero, deleniti autem quasi obcaecati
            ipsam natus quod ducimus quis aspernatur quisquam.
            <br />
            Molestiae impedit aperiam neque exercitationem sequi.
          </p>
        </div>
      </div>
      <div className="home_3" id="about">
        <div className="">
          <h1>Who are you?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            quidem commodi ducimus minus fuga neque saepe maxime ea a, expedita
            culpa temporibus dolorum quisquam, eius nulla accusamus quis nihil
            exercitationem.
          </p>
        </div>
      </div>
      <div className="home_4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
