import "./QuoteText.css";

const QuoteText = function (props) {
  const color = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8) + 1];
    }
    return color;
  };
  return (
    <div
      className="quote-container"
      style={{ color: color(), backgroundColor: color() }}
    >
      <blockquote className="otro-blockquote">{props.data.quote}</blockquote>

      <button type="button" onClick={props.getQuote}>
        get Quote
      </button>
    </div>
  );
};
export default QuoteText;
