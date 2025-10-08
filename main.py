import random
item_list = ["Rock", "Paper", "Scissors"]

user_choice = input("Enter your choice: ")
comp_choice = random.choice(item_list)

print(f"User choice = {user_choice}")
print(f"Computer choice = {comp_choice}")

if user_choice == comp_choice:
    print("Draw")
elif user_choice == "Rock" and comp_choice == "Scissors":
    print("You win")
elif user_choice == "Paper" and comp_choice == "Rock":
    print("You win")
elif user_choice == "Scissors" and comp_choice == "Paper":
    print("You win")
else:
    print("You lose")