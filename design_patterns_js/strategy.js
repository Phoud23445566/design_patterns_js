class ShippingStrategy {
    calculateCost(order) {
        throw new Error('This method should be overridden!');
    }
}

class FastShipping extends ShippingStrategy {
    calculateCost(order) {
        return order.weight * 10;
    }
}

class CheapShipping extends ShippingStrategy {
    calculateCost(order) {
        return order.weight * 5;
    }
}

class Order {
    constructor(weight, shippingStrategy) {
        this.weight = weight;
        this.shippingStrategy = shippingStrategy;
    }

    setShippingStrategy(strategy) {
        this.shippingStrategy = strategy;
    }

    calculateShipping() {
        return this.shippingStrategy.calculateCost(this);
    }
}

// Test Strategy
const order = new Order(2, new FastShipping());
console.log("Strategy Pattern:");
console.log("Fast Shipping Cost:", order.calculateShipping());

order.setShippingStrategy(new CheapShipping());
console.log("Cheap Shipping Cost:", order.calculateShipping());

