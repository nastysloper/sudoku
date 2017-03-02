23 February 2017

Start writing tests for your helper functions.

Find a number in a row?
What's the algorithm?
Check to see what number is legal.

If (only one number can fit in this row && only one number can fit in this column &&
only one number can fit in this grid)
then write that number to that spot.

Create your own puzzles:
Use a backtracking algorithm to seed the table.
Write to the first square a random number between 1-9 inclusive.
Repeat this step in the next square but omit the first number.
Continue this down the row. First row done!
Repeat this step on the second row, but there is an additional constraint:
Omit all the numbers in the column as well as the grid.
Repeat for all 9 rows.

How to selectively remove numbers to create the puzzle?

Transformations:
Swap two rows or two columns.

Remove data from a number of cells to create a puzzle.
The more cells you erase, the harder the puzzle becomes.
Take care that you do not create an unsolveable puzzle.

Easy puzzles have 30-35 filled cells
Medium puzzles have 25-30 filled cells
Hard puzzles have 20-25 filled cells

Total number of cells is 81 (9x9), so you're talking about leaving in about a third.

Approach:
remove random cells (risky)
remove random with simple limits (let only 0-1 rows or columns be empty)
remove random with 1-level check (this is the way to go)

Random with one-level check: only remove a cell if it can be solved with the 1-level check. That is, only one number can occupy that cell and satisfy the constraints of the puzzle.

2 March 2017

I can produce 9 rows, each row containing the numbers 1 through 9.
Next step is to add a check to ensure uniqueness in the column as well.
After that check for uniqueness in the grid.


