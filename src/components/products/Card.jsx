const Card = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {/* <img src={imageUrl} alt="Card Image" /> */}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
