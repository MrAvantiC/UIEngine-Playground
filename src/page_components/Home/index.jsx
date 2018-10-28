import React from 'react'
import Navigation from '../../components/Navigation/variants/Navigation'
import Heading from '../../components/Heading'
import KnowHowItem from '../../components/KnowHowItem'

const Home = ({ titleImage, knowHowItems }) => {
  return (
    <div>
      <header>
        <Navigation />
        <figure className="title-image">
          <img src={titleImage} alt="marmalade GmbH" />
          <figcaption>
            <span className="title-text">Gemeinsam</span>
            <span className="title-text">Erfolgreich</span>
            <span className="title-text">E-Commerce</span>
          </figcaption>
        </figure>
      </header>

      <main>
        <section className="know-how">
          <Heading element="h3">Unsere Kompetenzen</Heading>
          <div className="content content--know-how">
            {knowHowItems.map(item => (
              <KnowHowItem item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
