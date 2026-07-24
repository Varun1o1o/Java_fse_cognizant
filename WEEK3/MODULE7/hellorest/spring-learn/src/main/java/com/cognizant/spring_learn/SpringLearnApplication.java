package com.cognizant.spring_learn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER =
			LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(SpringLearnApplication.class, args);

		SpringLearnApplication app = new SpringLearnApplication();
		app.displayDate();
	}

	public void displayDate() {

		LOGGER.info("START");

		String date = java.time.LocalDateTime.now().toString();

		LOGGER.debug(date);

		LOGGER.info("END");
	}
}
