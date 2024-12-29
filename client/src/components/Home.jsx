import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image.png";

const Home = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#mission">Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item" style={{marginLeft:"1000px"}}>
                <Link className="btn btn-primary" to="/register">Signup/Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mission Section */}
      <section id="mission" className="container text-center mt-5 pt-5">
        <img src={logo} alt="Logo" style={{ height: "100px" }} className="img-fluid mb-3" />
        <h2>Our Mission</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod est ut arcu
          scelerisque, non feugiat tortor dignissim.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="container my-5">
        <h2 className="text-center mb-4">Features</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod arcu id eros vulputate.</p>
          </div>
          <div className="col-md-4">
            <h3>Feature 2</h3>
            <p>Nulla facilisi. Nam convallis quam nec ipsum facilisis, ut ultrices lacus vehicula.</p>
          </div>
          <div className="col-md-4">
            <h3>Feature 3</h3>
            <p>Sed in orci eu lorem bibendum interdum non vel odio. Suspendisse potenti.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container my-5">
        <h2 className="text-center mb-4">Pricing</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h3>Basic</h3>
                <p className="price">$10/month</p>
                <p>Essential features</p>
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h3>Pro</h3>
                <p className="price">$20/month</p>
                <p>Advanced features</p>
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h3>Enterprise</h3>
                <p className="price">$50/month</p>
                <p>All features</p>
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-light py-5">
        <div className="container text-center">
          <h2>What Our Clients Say</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <blockquote>
                <p>"This service is amazing! Highly recommend it."</p>
                <footer>- Client 1</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote>
                <p>"A game changer for our business!"</p>
                <footer>- Client 2</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote>
                <p>"Excellent support and features."</p>
                <footer>- Client 3</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>1234 Street Name, City, Country</p>
          <div className="social-icons mb-3">
            <a href="#" className="text-white mx-2">Facebook</a>
            <a href="#" className="text-white mx-2">Twitter</a>
            <a href="#" className="text-white mx-2">Instagram</a>
          </div>
          <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
