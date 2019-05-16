class User:
    def __init__(self, name):
        self.name = name
        self.account = BankAccount(int_rate=0.02, balance=0)
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self
    def display_user_balance(self):
        self.account.display_account_info()
        return self

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

george = User("George")
george.make_deposit(100).make_withdrawal(10).make_withdrawal(15).display_user_balance()
