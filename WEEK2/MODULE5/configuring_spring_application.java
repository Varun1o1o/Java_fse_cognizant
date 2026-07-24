import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

class BookRepository {

    public void displayRepository() {
        System.out.println("Book Repository Created");
    }
}

class BookService {

    public void displayService() {
        System.out.println("Book Service Created");
    }
}

public class LibraryManagement {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookRepository repository =
                context.getBean("bookRepository", BookRepository.class);

        BookService service =
                context.getBean("bookService", BookService.class);

        repository.displayRepository();
        service.displayService();
    }
}
