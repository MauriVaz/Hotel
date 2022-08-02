import { createHook, createStore } from 'react-sweet-state';
import { mutate } from '../lib/fetcher';

const Store = createStore({
  initialState: {
    appointment: {
      textValoration: '',
      stars: 0,
      date: new Date(),
    },
  },
  actions: {
    updateValoration:
      (valoration) =>
      ({ setState, getState }: any) => {
        const currentAppoint = getState().appointment;
        setState({
          appointment: { ...currentAppoint, valoration: valoration as string },
        });
      },
    updateStars:
      (stars) =>
      ({ setState, getState }) => {
        const currentAppoint = getState().appointment;
        setState({
          appointment: { ...currentAppoint, stars: stars as number },
        });
      },
    updateDate:
      (date) =>
      ({ setState, getState }) => {
        const currentAppoint = getState().appointment;
        setState({
          appointment: { ...currentAppoint },
        });
        setState({
          appointment: { ...currentAppoint, date: date as Date },
        });
      },
    sendValoration:
      () =>
      ({ setState, getState }) => {
        const currentAppoint = getState().appointment;

        // Send info to DB
        mutate('/valorations', currentAppoint);

        // Empty inputs
        setState({
          appointment: {
            textValoration: '',
            stars: 0,
            date: new Date(),
          },
        });
      },
  },
  name: 'valoration',
});

export const useValorations = createHook(Store);
