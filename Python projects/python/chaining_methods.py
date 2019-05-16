class User:
    def __init__(self, name):
        self.name = name
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdraw(self, amount):
        self.account_balance -= amount
        return self

john = User("John")
mark = User("Mark")
george = User("George")

john.make_deposit(50).make_deposit(50).make_deposit(10).make_withdraw(5)
print(john.account_balance)

mark.make_deposit(75).make_deposit(25).make_withdraw(10).make_withdraw(5)
print(mark.account_balance)

george.make_deposit(100).make_withdraw(5).make_withdraw(10).make_withdraw(15)
print(george.account_balance)
