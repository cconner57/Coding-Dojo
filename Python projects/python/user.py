class User:
    def __init__(self, name):
        self.name = name
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        pass
john = User("John")
mark = User("Mark")
george = User("George")

john.make_deposit(50).make_deposit(50).make_deposit(10).make_withdrawal(5)
print(john.account_balance)

mark.make_deposit(75).make_deposit(25).make_withdrawal(10).make_withdrawal(5)
print(mark.account_balance)

george.make_deposit(100).make_withdrawal(5).make_withdrawal(10).make_withdrawal(15)
print(george.account_balance)
