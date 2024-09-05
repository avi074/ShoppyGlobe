import { Typography } from "@material-tailwind/react"

function About() {
  return (
    <div className='theme-text p-6'>
      <section className='about-us'>
        <Typography color='blue' textGradient variant='h1' className='mb-2'>
          About ShoppyGlobe
        </Typography>
        <div className='container flex flex-col gap-4'>
          <p>
            Welcome to ShoppyGlobe, your number one source for all things
            [Product Category]. We're dedicated to giving you the very best of
            [Product Category], with a focus on quality, customer service, and
            uniqueness.
          </p>

          <p>
            Founded in [Year] by [Founder Name], ShoppyGlobe has come a long way
            from its beginnings in [Starting Location]. When [Founder Name]
            first started out, [his/her/their] passion for [Industry/Passion]
            drove them to start their own business.
          </p>

          <p>
            We now serve customers all over [Place/Area Served], and are
            thrilled to be a part of the [industry type] industry.
          </p>

          <p>
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don't hesitate to
            contact us.
          </p>

          <p>
            <strong>Sincerely,</strong>
          </p>
          <p>
            <strong>[Founder Name]</strong>
          </p>
          <p>
            <strong>Founder, ShoppyGlobe</strong>
          </p>
        </div>
      </section>

      <section className='our-mission mt-4'>
        <Typography variant='h2' className='text-center'>
          Our Mission
        </Typography>
        <div className='container'>
          <p>
            At ShoppyGlobe, our mission is to provide a seamless online shopping
            experience by offering the best products at unbeatable prices. We
            believe in customer satisfaction and strive to bring the latest and
            most innovative products to your doorstep.
          </p>
        </div>
      </section>

      <section className='team mt-6'>
          <Typography variant='h5' className="mb-4">Meet Our Team</Typography>
        <div className='container'>
          <div className='team-members flex justify-around flex-wrap gap-2 items-center'>
            <div className='team-member'>
              <img src='team1.jpg' alt='Founder Name' />
              <h3>[Founder Name]</h3>
              <p>Founder & CEO</p>
            </div>
            <div className='team-member'>
              <img src='team2.jpg' alt='Team Member Name' />
              <h3>[Team Member Name]</h3>
              <p>Head of Operations</p>
            </div>
            <div className='team-member'>
              <img src='team3.jpg' alt='Team Member Name' />
              <h3>[Team Member Name]</h3>
              <p>Chief Marketing Officer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
