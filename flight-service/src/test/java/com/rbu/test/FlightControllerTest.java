package com.rbu.test;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.doNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rbu.entity.Flight;
import com.rbu.service.FlightService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class FlightControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FlightService service;

    @Autowired
    private ObjectMapper mapper;

    @Test
    public void testAddFlight() throws Exception {

        Flight flight = new Flight(501, "Indigo", "Nagpur", "Delhi", 5000);

        when(service.save(any(Flight.class))).thenReturn(flight);

        mockMvc.perform(post("/api/v1/flights/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(flight)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.code").value(501))
                .andExpect(jsonPath("$.carrier").value("Indigo"))
                .andExpect(jsonPath("$.source").value("Nagpur"))
                .andExpect(jsonPath("$.destination").value("Delhi"))
                .andExpect(jsonPath("$.cost").value(5000));
    }

    @Test
    public void testGetByCode() throws Exception {

        Flight flight = new Flight(501, "Indigo", "Nagpur", "Delhi", 5000);

        when(service.findByCode(501)).thenReturn(flight);

        mockMvc.perform(get("/api/v1/flights/501"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(501))
                .andExpect(jsonPath("$.carrier").value("Indigo"));
    }

    @Test
    public void testGetAllFlights() throws Exception {

        List<Flight> flights = Arrays.asList(
                new Flight(501, "Indigo", "Nagpur", "Delhi", 5000),
                new Flight(502, "Air India", "Mumbai", "Delhi", 7000)
        );

        when(service.list()).thenReturn(flights);

        mockMvc.perform(get("/api/v1/flights/all"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2));
    }

    @Test
    public void testDeleteFlight() throws Exception {

        doNothing().when(service).delete(501);

        mockMvc.perform(delete("/api/v1/flights/501"))
                .andExpect(status().isOk());
    }
}