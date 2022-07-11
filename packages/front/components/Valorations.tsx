import React, { PropsWithRef } from 'react';

const Valorations = ({ textValoration, stars }: any) => (
  <>
    <div className="flex shadow-lg">
      <section className="flex-col p-4 mt-4 mb-4 border-4 border-cyan-500">
        <p>{textValoration} </p>
        <p>{stars} estrellas</p>
      </section>
    </div>
  </>
);

export default Valorations;
