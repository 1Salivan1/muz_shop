import React from "react";
import InstrumentCard from "../../components/InstrumentCard/InstrumentCard";
import guitar from "../../assets/img/guitar.png";
import violence from "../../assets/img/violence.png";
import drums from "../../assets/img/drums.png";
import saxophone from "../../assets/img/saxophone.png";
import style from "./Main.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/order");
  };

  return (
    <body>
      <div className="wrapper">
        <div className={style["header"]}>
          <div className="container">
            <h1 style={{ marginBottom: "20px" }}>
              У нас вы найдете подходящий для себя инструмент
            </h1>
            <p>Мы продаем инструменты практически всех производителей</p>
          </div>
        </div>

        <section className={style["offer"]}>
          <div className="container">
            <h3 style={{ marginBottom: "50px" }}>
              Вот что мы можем вам предложить
            </h3>
            <div className={style["offer__list"]}>
              <InstrumentCard img={guitar} title="Гитара" />
              <InstrumentCard img={violence} title="Скрипка" />
              <InstrumentCard img={drums} title="Барабаны" />
              <InstrumentCard img={saxophone} title="Саксофон" />
            </div>
          </div>
        </section>

        <section className={style["personal"]}>
          <div className="container">
            <h1 style={{ marginBottom: "20px" }}>Инструмент на заказ</h1>
            <p style={{ marginBottom: "20px" }}>
              Вы так же можете заказать инструмент у нас, наши мастера сделают
              его в течении недели.
            </p>
            <button className="button" onClick={handleOrderClick}>
              Заказать
            </button>
          </div>
        </section>
      </div>
    </body>
  );
}

export default Home;
