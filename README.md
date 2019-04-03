# Touchstone - a simple UI Automation Test


## Test Parts:

1. Registration
2. Login
3. Hiring a Hero
4. Viewing Heroes
5. The End


#### Registration
* Go to Registration page
* Fill out form with information
* Complete Registration
* Confirm registration was successful (via snackbar)

#### Login
* Try to login with incorrect credentials
  - Confirm error message populates as '''Invalid username or password'''
* Try to login using account created from Registration step
* Confirm you successfully logged in using url (/start)

#### Hiring a Hero
* Hire 3 Heroes on the page
  - You can hire heroes by selected a Hero from the expandable list
  - Then pressing the corresponding hire button for that Hero
* Confirm you get a succesful message for each Hero hired (via snackbar)
* Make note of the Heroes you hire as you will need them later (Name and Price)

#### Viewing Heroes
* Navigate to the 'My Heroes' Page by selecting it from the menu in top left corner of screen
* Confirm the screen successfully recognizes your username (via toolbar e.g Tester's Heroes)
* Confirm that there are 3 Heroes listed on the page
  - Ensure the Heroes listed match the Heroes you added in Hiring a Hero step
  - Check to see if the "Total Price" listed on the page is equivelent to the total price of the Heroes you added in Hiring a Hero step
* Select the middle "Discount!" Checkbox
  - Confirm that when selected the checkbox removes 20 from your total Price


### The End
* Thats it!
