class User {
    constructor(name) {
        this.name = name;
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
        this.role = "Admin";
    }
}

class Guest extends User {
    constructor(name) {
        super(name);
        this.role = "Guest";
    }
}

class UserFactory {
    static createUser(name, type) {
        switch(type) {
            case "Admin":
                return new Admin(name);
            case "Guest":
                return new Guest(name);
            default:
                return new User(name);
        }
    }
}

// Test Factory
const user1 = UserFactory.createUser("Alice", "Admin");
const user2 = UserFactory.createUser("Bob", "Guest");

console.log("Factory Pattern:");
console.log(user1);
console.log(user2);
console.log(user3);
