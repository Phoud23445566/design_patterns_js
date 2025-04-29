class UserService {
    save(user) {
        console.log(`Saving user: ${user}`);
    }
}

function LoggingDecorator(service) {
    return {
        save(user) {
            console.log(`Logging: saving user ${user}`);
            service.save(user);
        }
    };
}

// Test Decorator
const userService = new UserService();
const decoratedService = LoggingDecorator(userService);

console.log("Decorator Pattern:");
decoratedService.save("SINGSAVATH Phoudphavan");
console.log("Decorator Pattern:");
decoratedService.save("Anh Nhi");

