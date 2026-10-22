package dev.jonis.portfolio;

import org.springframework.stereotype.Service;

@Service
public class BookSearchService {

    public record Book(String title, String author) {
    }

    public record SearchResponse(Book[] books) {
    }

    public SearchResponse searchBooks(String query) {
        Book[] books = {
                new Book("Permaculture", "Bill Mollison")
        };

        return new SearchResponse(books);
    }
}
