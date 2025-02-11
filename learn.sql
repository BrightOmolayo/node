
SELECT emp_no as "Employee #", birth_date as "Birthday", first_name AS "First Name" FROM employees;
SELECT * FROM titles
SELECT CONCAT(emp_no, ' works as a ',title) as "Employee Title" FROM titles
SELECT CONCAT( '   ', first_name, '   ',last_name) as "Employee Full_Names" FROM employees
SELECT emp_no, CONCAT(first_name, '   ', last_name ) as "Employee Full_names" FROM employees;
SELECT SUM(salary) FROM salaries;
-- I want to select employee with the name Mayumi schueller
SELECT last_name, first_name from public.employees WHERE last_name = 'Schueller' AND first_name = 'Mayumi';