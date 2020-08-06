import {configureStore} from '@reduxjs/toolkit';

import muestrasSlice from '../features/muestras/muestrasSlice';

export default configureStore({
  reducer: {
    muestras: muestrasSlice,
  },
});
