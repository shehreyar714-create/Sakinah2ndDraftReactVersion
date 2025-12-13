import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../css/AboutUs.css";

function AboutUs() {
    return (
        <>
            <Navbar />
             
            <main className="about-us">
                <section className="about-section">
                    <h1>About Us</h1>
                    <p>
                        Welcome to our company! We are dedicated to providing the best services to our customers.
                        Our team is passionate about innovation and excellence.
                    </p>
                </section>
                <section className="team-section">
                    <h2>Our Team</h2>
                    <p>
                        Our team consists of experienced professionals who are experts in their respective fields.
                        We work collaboratively to achieve our goals and deliver outstanding results.
                    </p>
                </section>
                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to create value for our customers through innovative solutions and exceptional service.
                        We strive to exceed expectations and build lasting relationships.
                    </p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or would like to learn more about our company, please feel free to reach out to us.
                        We would love to hear from you!
                    </p>
                </section>

            </main>
            <Footer />
        </>
  );
}

export default AboutUs;
