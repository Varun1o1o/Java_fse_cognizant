package com.cognizant.springdatajpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

public class SpringDataJPA {

    @Repository
    interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    }

    @Service
    static class EmployeeService {

        @Autowired
        private EmployeeRepository employeeRepository;

        @Transactional
        public void addEmployee(Employee employee) {

            employeeRepository.save(employee);

        }
    }
}
