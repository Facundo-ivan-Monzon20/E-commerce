function SubjectCards({ subject }) {
  return (
    //   <!--///////////////////////////////// -->
    // <!--//CARDS ALGUNOS PRODUCTOS////////-->
    // <!--/////////////////////////////// -->

    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#55595c" />
        </svg>

        <div className="card-body">
          <h5 className="card-text">{subject.name}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href="#" className="btn btn-primary p-3">
                Go somewhere
              </a>
            </div>
            {/* <!-- <small class="text-muted">9 mins</small> --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectCards;
