import { useState } from 'react';

export function useInputForm(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChangeValue(event) {
    setValue(event.target.value);
  }

  return { value, onChange: handleChangeValue };
}
