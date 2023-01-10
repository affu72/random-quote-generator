import QuoteText from "./QuoteText";
import { useState } from "react";

const GetData = (props) => {
  const [data, setData] = useState("");

  async function fechData() {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "a25a06f5dbmshe2b02350f72c404p1750aajsn343cefeafacc",
    //     "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    //   },
    // };

    try {
      const response = await fetch(
        // "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",
        // options
        "https://hindi-quotes.vercel.app/random"
      );
      setData(await response.json());
    } catch (error) {
      console.log(console.log(error.msg));
    }
  }

  return <QuoteText data={data} getQuote={fechData} />;
};

export default GetData;
