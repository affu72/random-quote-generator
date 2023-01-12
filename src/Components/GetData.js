import QuoteText from "./QuoteText";
import { useEffect, useState } from "react";

const GetData = (props) => {
  const [data, setData] = useState("");

  async function fetchData() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      setData(await response.json());
    } catch (error) {
      console.log(console.log(error.msg));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <QuoteText data={data} getQuote={() => fetchData()} />;
};

export default GetData;
