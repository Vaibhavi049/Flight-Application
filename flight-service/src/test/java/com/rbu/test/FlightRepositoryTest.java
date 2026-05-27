package com.rbu.test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.rbu.entity.Flight;
import com.rbu.repo.FlightRepository;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class FlightRepositoryTest {

    @Autowired
    private FlightRepository repo;

    @Test
    @Order(1)
    public void testSave() {

        Flight flight = new Flight(401, "Indigo", "Nagpur", "Delhi", 4500);

        Flight saved = repo.save(flight);

        assertNotNull(saved);
        assertEquals(401, saved.getCode());
    }

    @Test
    @Order(2)
    public void testFindByCode() {

        Optional<Flight> flight = repo.findByCode(401);

        assertTrue(flight.isPresent());
        assertEquals("Indigo", flight.get().getCarrier());
    }

    @Test
    @Order(3)
    public void testFindByCarrier() {

        List<Flight> flights = repo.findByCarrier("Indigo");

        assertNotNull(flights);
        assertTrue(flights.size() > 0);
    }

    @Test
    @Order(4)
    public void testFindByRoute() {

        List<Flight> flights = repo.findBySourceAndDestination("Nagpur", "Delhi");

        assertNotNull(flights);
        assertTrue(flights.size() > 0);
    }

    @Test
    @Order(5)
    public void testFindByPriceRange() {

        List<Flight> flights = repo.findByPriceRange(3000, 7000);

        assertNotNull(flights);
        assertTrue(flights.size() > 0);
    }

    @Test
    @Order(6)
    public void testFindAll() {

        List<Flight> flights = repo.findAll();

        assertNotNull(flights);
    }

    @Test
    @Order(7)
    public void testDelete() {

        repo.deleteById(401);

        Optional<Flight> deleted = repo.findByCode(401);

        assertFalse(deleted.isPresent());
    }
}