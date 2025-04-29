class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class EmailService {
    update(data) {
        console.log(`Sending email to user: ${data}`);
    }
}

class LoggerService {
    update(data) {
        console.log(`Logging login for user: ${data}`);
    }
}

// Test Observer
const subject = new Subject();
const emailService = new EmailService();
const loggerService = new LoggerService();

subject.subscribe(emailService);
subject.subscribe(loggerService);

console.log("Observer Pattern:");
subject.notify("SINGSAVATH Phoudphavan");
console.log("Observer Pattern:");
subject.notify("tanoy");
console.log("tanoysalavanh@icloud.com:");