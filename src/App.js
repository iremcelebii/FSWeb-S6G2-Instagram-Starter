import React, { useEffect, useState } from "react";
import "./App.css";
import Gönderiler from "./bileşenler/Gönderiler/Gönderiler";
import AramaÇubuğu from "./bileşenler/AramaÇubuğu/AramaÇubuğu";
import sahteVeri from "./sahte-veri";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [arama, setArama] = useState(null);

  const gonderiyiBegen = (gonderiID) => {
    gonderiler.forEach((item) => {
      if (item.id === gonderiID) {
        item.likes += 1;
        setGonderiler([...gonderiler]);
      }
    });
  };

  const aramaYap = (yeniArama) => {
    setArama(yeniArama);

    setGonderiler(
      sahteVeri.filter((item) => item.username.includes(yeniArama))
    );
    // const arr = [];
    // gonderiler.forEach((item) => {
    //   if (item.username.includes(yeniArama)) {
    //     arr.push(item);
    //   }
    //   setGonderiler([arr]);
    // });
  };

  return (
    <div className="App">
      <AramaÇubuğu arama={arama} aramaYap={aramaYap} />
      <Gönderiler gonderiler={gonderiler} gonderiyiBegen={gonderiyiBegen} />
    </div>
  );
};

export default App;
