import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Enjoy a complimentary Pineapple Daquiri when you dine with us.",
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info: "Head to Hindhede Nature Park located next to Bukit Timah Nature Reserve which has easy trails and well-defined footpaths perfect for families, children and hiking beginners.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle to City",
        info: "Our resort provides free shuttle van to the city for your shopping trip, the van leaves every hour starting from 9am till 9pm.",
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info: "Grab a free beer from our cozy bar from 2pm-5pm along with some snacks!",
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>;
          })}
        </div>
      </section>
    )
  }
}
