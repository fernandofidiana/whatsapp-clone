/* eslint-disable react/prop-types */
function Message({ text, sender, you }) {
  return (
    <div className={`message${sender === you ? "outgoing" : "incoming"}`}>
      <p>{text}</p>
    </div>
  );
}

export default Message;
