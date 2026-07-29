import "./Page.css";

function About() {
  return (
    <>
      <section className="page-header">
        <h1>About Us</h1>
        <p>
          Learn more about our organization, our mission, and the work we do
          to create meaningful impact in the community.
        </p>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Who We Are</h2>

          <p>
            We are a nonprofit organization committed to supporting communities
            through collaboration, innovation, and sustainable solutions.
          </p>

          <p>
            Our goal is to bring people together, provide opportunities, and
            create positive change through our programs and initiatives.
          </p>

          <h2>Our Mission</h2>

          <p>
            Our mission is to empower individuals and communities by providing
            resources, support, and opportunities that improve lives.
          </p>

          <h2>Our Vision</h2>

          <p>
            We envision a world where every community has access to the tools
            and support needed to thrive.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;