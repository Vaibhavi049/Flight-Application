package com.rbu.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.rbu.entity.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {

    Optional<Flight> findByCode(int code);

    List<Flight> findByCarrier(String carrier);

    List<Flight> findBySourceAndDestination(String source, String destination);

    @Query("FROM Flight WHERE cost BETWEEN :min AND :max")
    List<Flight> findByPriceRange(@Param("min") double min,
                                  @Param("max") double max);
}