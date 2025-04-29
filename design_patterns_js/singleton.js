class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.connection = "Connected to Database!";
        Database.instance = this;
    }

    getConnection() {
        return this.connection;
    }
}

// Test Singleton
const db1 = new Database();
const db2 = new Database();

console.log("Singleton Pattern:");
console.log(db1.getConnection());
console.log("db1 === db2?", db1 === db2);
console.log("db2 === db3?", db2 === db3 );
