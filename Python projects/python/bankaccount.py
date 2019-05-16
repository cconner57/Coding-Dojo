class BankAccount:
    def __init__(self, int_rate, balance):
        self.interest = int_rate
        self.balance = 0
    def deposit(self, amount):
        self.balance += amount 
        return self
    def withdraw(self, amount):
        self.balance -= amount
        if self.balance < 0:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self
    def display_account_info(self):
        print("Balance: $" + str(self.balance))
        return self
    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * self.interest + self.balance
        return self

account1 = BankAccount(.1, 0)
account2 = BankAccount(.1, 0)

account1.deposit(100).deposit(50).deposit(50).withdraw(225).yield_interest().display_account_info()

account2.deposit(200).deposit(300).withdraw(10).withdraw(15).withdraw(25).withdraw(50).yield_interest().display_account_info()
