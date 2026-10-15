class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(1000);
console.log(account.getBalance()); // 1000

account.deposit(-500); // Rejected
console.log(account.getBalance()); // 1000