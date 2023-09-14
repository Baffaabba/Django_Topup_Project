import React from 'react';

const Data = () => {
  const dataPlans = [
    // Your data plans data here
  ];

  return (
    <section className="data" id="data">
      <h2>Our Data Plans</h2>
      <ul className="cards">
        {dataPlans.map((plan, index) => (
          <li className="card" key={index}>
            <img src={plan.image} alt="Data Plan Image" />
            <h3>{plan.title}</h3>
            <table>
              {/* Your data table content here */}
            </table>
            <div className="buybtn">
              <a href={plan.link}>Buy Now</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Data;
