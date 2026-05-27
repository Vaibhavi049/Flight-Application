FROM --platform=linux/amd64/v4 amazoncorretto:17-alpine-jdk

ARG JAR_FILE=target/flight-service-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} flight-service.jar

EXPOSE 8082

ENTRYPOINT ["java","-jar","/flight-service.jar"]