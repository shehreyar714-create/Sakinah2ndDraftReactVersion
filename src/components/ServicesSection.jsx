import "../css/Home.css"


function ServicesSection() {
  const services = [
    {
      icon: '🕌',
      title: 'Prayer Times',
      description: 'Accurate and up-to-date mosque prayer times delivered to help you stay connected to your daily prayers wherever you are.'
    },
    {
      icon: '💰',
      title: 'Zakat & Fitra',
      description: 'Easy and reliable calculations for zakat and fitra to ensure your charitable obligations are fulfilled correctly.'
    },
    {
      icon: '📜',
      title: 'Inheritance Calculations',
      description: 'Clear and Shariah-compliant inheritance calculations to help distribute assets fairly and transparently.'
    },
    {
      icon: '🧕',
      title: 'Iddah Guidance',
      description: 'Accurate iddah period calculations and guidance to support women during this important phase with clarity and respect.'
    },
    {
      icon: '📖',
      title: 'Islamic Knowledge',
      description: 'Access to authentic Islamic resources and explanations to strengthen your understanding of daily obligations.'
    },
    {
      icon: '🛡️',
      title: 'Trusted Platform',
      description: 'A secure and reliable platform ensuring your data and religious calculations remain private and trustworthy.'
    }
  ]

  return (
    <section id="services" className="offerings-section">
      <div className="content-container">
        <h2 className="heading-main">Our Services</h2>
        <p className="subtitle-text">
          Comprehensive Islamic tools and resources designed to support your
          daily spiritual journey
        </p>

        <div className="features-layout">
          {services.map((service, index) => (
            <div key={index} className="feature-box">
              <div className="icon-container">{service.icon}</div>
              <h3 className="feature-heading">{service.title}</h3>
              <div className="accent-bar"></div>
              <p className="feature-details">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
