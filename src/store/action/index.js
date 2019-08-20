import { CHANGE_YOUR_SALARY, CHANGE_MINIMUM_SALARY } from './type';

export function changeYourSalary(salary) {
  return {
    type: CHANGE_YOUR_SALARY,
    salary,
  };
}

export function changeMinimumSalary(salary) {
  return {
    type: CHANGE_MINIMUM_SALARY,
    salary,
  };
}
