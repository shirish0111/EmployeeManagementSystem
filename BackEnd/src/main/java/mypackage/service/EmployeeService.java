package mypackage.service;

import mypackage.dto.EmployeeDto;
import java.util.List;
public interface EmployeeService {

	EmployeeDto createEmployeeDto(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);
	
	List<EmployeeDto> getAllEmployees();
	
	EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee);
	
	
	void deleteEmployee(Long employeeId);
}
