package mypackage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mypackage.entity.Employee;

public interface EmployeeRepository  extends JpaRepository<Employee, Long>{

}
