import React, { useCallback, useState } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const Parent = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  },[salary])

  return (
    <div>
      <Title />
      
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>
        Increment Age
      </Button>

      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>
        Increment Salary
      </Button>
    </div>
  );
};

export default Parent;
