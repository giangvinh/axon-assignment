import React, { lazy, Suspense } from 'react';

import './App.css';
import Spinner from './components/spinner/spinner.component';

const ColorBoard = lazy(() =>
  import('./components/color-board/color-board.component')
);

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ColorBoard />
    </Suspense>
  );
};

export default App;
