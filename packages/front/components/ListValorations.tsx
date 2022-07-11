import React from 'react';
import useSWR from 'swr';
import Valorations from './Valorations';

const ListValorations = () => {
  const { data } = useSWR('api/valorations');

  if (!data) {
    return <></>;
  }
  return (
    <div className="p-4 mt-6 mb-6">
      {data.map((valorations: any, i: any) => (
        <Valorations
          key={valorations.id}
          stars={valorations.stars}
          textValoration={valorations.textValoration}
        />
      ))}
    </div>
  );
};

export default ListValorations;
