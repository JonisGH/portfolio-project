package dev.jonis.portfolio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

    public record Profile(String name, String role) {
    }

    @GetMapping("/api/profile")
    public Profile getProfile() {
        return new Profile("Jonis", "Software Engineer");
    }
};;;