package com.ranchiDiary.RanchiDiaryBackend.config;

import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.yaml.snakeyaml.LoaderOptions;
import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.constructor.Constructor;

import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Logger;

@Configuration
public class OpenApiConfig {

    private static final Logger logger = Logger.getLogger(OpenApiConfig.class.getName());

    @Bean
    public OpenAPI customOpenAPI() {
        LoaderOptions options = new LoaderOptions();
        Constructor constructor = new Constructor(OpenAPI.class, options);
        Yaml yaml = new Yaml(constructor);
        try (InputStream inputStream = new ClassPathResource("swagger-config.yaml").getInputStream()) {
            OpenAPI openAPI = yaml.load(inputStream);
            logger.info("Loaded OpenAPI spec from YAML file: " + openAPI);
            return openAPI;
        } catch (IOException e) {
            logger.severe("Unable to load OpenAPI YAML file: " + e.getMessage());
            throw new RuntimeException("Unable to load OpenAPI YAML file", e);
        }
    }
}