import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import React from 'react';
import { useValorations } from '../../front/lib/UseValorations';

const FormValoration = () => {
  const [state, actions] = useValorations();

  return (
    <div>
      <form onSubmit={actions.sendValoration}>
        <input
          type="text"
          value={state.appointment.textValoration}
          onChange={(e) => actions.updateValoration(e.target.value)}
          required
          placeholder="Valoration"
        />
        <input
          type="number"
          min="0"
          max="5"
          step="0.5"
          value={state.appointment.stars}
          onChange={(e) => actions.updateStars(e.target.value)}
          required
          placeholder="Estrellas"
        />
        <Button onClick={() => actions.sendValoration}>
          Crea tu valoración
        </Button>
      </form>
    </div>
  );
};

export default FormValoration;
