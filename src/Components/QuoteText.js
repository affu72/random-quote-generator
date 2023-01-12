import "./QuoteText.css";
import icon from "../icon.svg";

const QuoteText = function (props) {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8) + 1];
    }
    return color;
  };

  const color = generateRandomColor();
  return (
    <div
      className="quote-container "
      id="quote-box"
      style={{
        color: color,
        backgroundColor: color,
      }}
    >
      <blockquote
        id="text"
        className="otro-blockquote"
        style={{
          color: color,
          // width: props.data.length >= 170 ? "70%" : null,
        }}
      >
        {props.data.content}
        <div className="quote-description">
          <a
            id="tweet-quote"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${props.data.content}`}
          >
            <img
              style={{
                backgroundColor: color,
              }}
              src={icon}
            />
          </a>
          <span id="author">- {props.data.author}</span>
        </div>
      </blockquote>
      <button id="new-quote" type="button" onClick={props.getQuote}>
        New Quote
      </button>
    </div>
  );
};
export default QuoteText;
