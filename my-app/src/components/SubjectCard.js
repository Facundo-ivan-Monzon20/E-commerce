function SubjectCards  ({subject})  {
  return (
    <div className="card">
      <img
        src="https://asset.conrad.com/media10/isa/160267/c1/-/en/1761542_BB_00_FB/image.jpg"
        className="card-img"
        alt="Memoria RAM"
      />
      <div className="card-body">
        <h4 className="card-title">{subject.name}</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#">
          <button className="card-btn">Go somewhere</button>
        </a>
      </div>
    </div>
  );
};

export default SubjectCards;
