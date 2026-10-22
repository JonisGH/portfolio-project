package dev.jonis.portfolio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class BookSearchController {
    private final BookSearchService bookSearchService;

    public BookSearchController(BookSearchService bookSearchService) {
        this.bookSearchService = bookSearchService;
    }

    @GetMapping("/api/books")
    public BookSearchService.SearchResponse searchBooks(
            @RequestParam("q") String query) {
        return bookSearchService.searchBooks(query);
    }

}