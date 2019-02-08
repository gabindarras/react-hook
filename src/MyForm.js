import React, { useContext, useReducer } from 'react';

import Row from './Row';

import ThemeContext from './ThemeContext';
import { useInputForm } from './customHooks/FormHooks';
import { useAppTitle, useWindowWidth } from './customHooks/commonHooks';
import { counterReducer } from './reducers/counter.reducer';

function MyForm() {
  const firstname = useInputForm('Mary');
  const lastname = useInputForm('Poppins');
  useAppTitle(firstname.value + ' ' + lastname.value);
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="form">
      <section className={theme}>
        <Row label="Firstname">
          <input {...firstname} />
        </Row>
        <Row label="Surname">
          <input {...lastname} />
        </Row>
        <Row label="Width">{width}</Row>
        <Row label="Count">
          <div>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          </div>
        </Row>
      </section>
    </div>
  );
}

export default MyForm;
