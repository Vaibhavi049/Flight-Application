package com.rbu.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.rbu.entity.Flight;
import com.rbu.service.FlightService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class FlightServiceTest {

    @Autowired
    private FlightService service;

    @Test
    @Order(1)
    public void testSave() {

        Flight flight = new Flight(
                201,
                "Air India",
                "Mumbai",
                "Delhi",
                6500
        );

        Flight savedFlight = service.save(flight);

        assertNotNull(savedFlight);
        assertEquals(201, savedFlight.getCode());
    }

    @Test
    @Order(2)
    public void testFindByCode() {

        Flight flight = service.findByCode(201);

        assertNotNull(flight);
        assertEquals("Air India", flight.getCarrier());
    }

    @Test
    @Order(3)
    public void testFindByCarrier() {

        List<Flight> flights = service.findByCarrier("Air India");

        assertNotNull(flights);
    }

    @Test
    @Order(4)
    public void testList() {

        List<Flight> flights = service.list();

        assertNotNull(flights);
    }
    
    @Test
    @Order(5)
    public void testFindByRoute() {

        List<Flight> flights = service.findByRoute("Mumbai", "Delhi");

        assertNotNull(flights);
        assertEquals(true, flights.size() > 0);
    }
    
    @Test
    @Order(6)
    public void testFindByPriceRange() {

        List<Flight> flights = service.findByPriceRange(3000, 7000);

        assertNotNull(flights);
        assertEquals(true, flights.size() > 0);
    }
    
    

}