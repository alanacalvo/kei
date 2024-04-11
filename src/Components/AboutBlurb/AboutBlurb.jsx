import "./AboutBlurb.scss";

function AboutBlurb() {
  return (
    <div className="aboutBlurb">
      <h1>Keeton Enterprises</h1>
      <p>
        Keeton Enterprises has been doing quality concrete pours and masonry
        work in Central Florida for over 40 years.
      </p>
      <p>
        The company was started as Keeton Concrete by Rick Keeton in 1982 in
        Florida, and was incorporated in 1990. Concrete was the main focus
        during the 1980's, pouring slabs for new homes, as well as various home
        additions, roadways, driveways, walkways and parking lots. In 1989, the
        business diversified to doing masonry, brick and block work, as well as
        concrete. Sometime later, the name was changed to Keeton Enterprises,
        Inc.
      </p>
      <p>
        Keeton Enterprises Inc has the knowledge and experience to get your job
        done right the first time, whether it's a patio or a full house
        foundation. The work is, and has always been, strictly supervised by
        Rick Keeton. Keeton Enterprises Inc is a small company, having less than
        10 employees. It has been kept small in order to maintain the best
        quality of concrete work, and therefore has stayed in the Central
        Florida area. We are licensed and fully insured, with Workman's
        Compensation insurance coverage on our employees as required by law.
      </p>
      <h2>Owners</h2>
      <div className="owners">
        <img src="assets/kei-bricks.jpeg" />
        <p>
          Rick and Melissa Keeton have owned and operated Keeton Enterprises for
          over 40 years. Rick oversees all of the hands on work, while Melissa
          handles all of the business operations.
        </p>
      </div>
      <h2>Concrete Crew</h2>
      <div className="concrete">
        <p>
          The concrete crew is made up of Joey, Dave, Ricky, and Matthew. This
          crew holds over 20 years of experience together. They have been taught
          how to pour concrete in such a quality way by Rick. This crew leaves
          customers extremely happy with their work!
        </p>
        <img src="assets/kei-bricks.jpeg" />
      </div>
      <h2>Brick Crew</h2>
      <div className="brick">
        <img src="assets/kei-bricks.jpeg" />
        <p>
          The masonry and brick crew is made up of Matt, Edward, and Paul. They
          hold over 15 years of experience collectively.{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutBlurb;
