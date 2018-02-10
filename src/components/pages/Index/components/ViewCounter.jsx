import React, { Component } from 'react';
// import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './ViewCounter.css';

// const propTypes = {
//   logo: PropTypes.string.isRequired
// };
class ViewCounter extends Component {
  render() {
    return (
      <section className="views-section">
        <ol>
          <li className="number">4</li>
          <li>,</li>
          <li className="number">3</li>
          <li className="number">5</li>
          <li className="number">1</li>
          <li>,</li>
          <li className="number">9</li>
          <li className="number">4</li>
          <li className="number">6</li>
        </ol>
        <h3>Our Monetized Views</h3>
        <p>
          Facere eveniet maiores aut autem alias rem. Aliquid velit illo reprehenderit voluptas eos error accusamus.
          Dolores nulla iste. Voluptatem nemo voluptas enim ducimus aliquam sit nihil soluta nam.
        </p>
      </section>
    );
  }
}

// ViewCounter.propTypes = propTypes;

export default ViewCounter;
