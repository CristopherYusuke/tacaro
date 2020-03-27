import React, { useState, useCallback, memo } from 'react';

function Setting() {
  const [YourSalary, setYourSalary] = useState(0);
  const [MinimumSalary, setMinimumSalary] = useState(0);
  const [Currency, setCurrency] = useState(0);

  const handle = useCallback((handleCallBack) => (e) => {
    handleCallBack(e.target.value);
  }, []);

  return (
    <form>
      <fieldset>
        <label htmlFor="your-salary">
          Your Salary
          <input type="tel" name="your-salary" id="salary" value={YourSalary} onChange={handle(setYourSalary)} />
        </label>
        {`${YourSalary}`}
        <label htmlFor="minimum-salary">
          Minimum Salary
          <input type="tel" name="minimum-salary" id="salary" value={MinimumSalary} onChange={handle(setMinimumSalary)} />
        </label>
        <label htmlFor="currency">
          Valor por Dolar
          <input type="tel" name="currency" id="currency " value={Currency} onChange={handle(setCurrency)} />
        </label>
      </fieldset>
    </form>
  );
}


export default memo(Setting);
