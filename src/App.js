import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import FaceBook from "./components/FaceBook";
import SignupPage from "./components/SignupPage";
import RGBColorPicker from "./components/RGBColorPicker";

function App() {
  return (
    <div className="App" style={{ padding: "1rem" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Iteration 1: IdCard */}
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* Iteration 2: Greetings */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* Iteration 3: Random */}
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* Iteration 4: BoxColor */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* Iteration 5: CreditCard */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      {/* Iteration 6: Rating */}
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {/* Iteration 7: DriverCard */}
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-IX061_UBERCH_P_20150605004308.jpg"
        car={{ model: "Toyota Corolla Altis", licensePlate: "CO42DE" }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://images.barrons.com/im-152573?width=1280&size=1.33333333"
        car={{ model: "Audi A3", licensePlate: "BE33ER" }}
      />

      {/* Iteration 8: LikeButton */}
      <div>
        <LikeButton />
        <LikeButton />
      </div>

      {/* Iteration 9: ClickablePicture */}
      <ClickablePicture
        img="https://i.imgur.com/8Km9tLL.png"
        imgClicked="https://i.imgur.com/yXOvdOSs.jpg"
      />

      {/* Iteration 10: Dice */}
      <Dice />

      {/* Iteration 11: Carousel */}
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />

      {/* Iteration 12: NumbersTable */}
      <NumbersTable limit={12} />

      {/* Iteration 13: FaceBook */}
      <FaceBook />

      {/* Iteration 15: SignupPage */}
      <SignupPage />

      {/* Iteration 16: RGBColorPicker */}
      <RGBColorPicker />
    </div>
  );
}

export default App;
