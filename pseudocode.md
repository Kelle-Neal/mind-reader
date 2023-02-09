# Pseudocode for Mind Reader

## ATOMIC DESIGN

### ATOMS

- Header (1,2,3,4)
- #=symbols list (5)
- Answer (6)
- Paragraph Text (2,3,4,5,6)
- Instruction Text (2,3,4,5) (can combine with Paragraph if you can do spacing between lines)
- Go Button (1) 'Starts Program' - Goes to next page
- Next Button (2,3,4) - Goes to next page
- Reveal Button (5) - 'Reveals the Answer' - Goes to next page
- Reset Button (2,3,4,5) - 'Resets Program' - Goes to page 1

### MOLECULES

- 

### ORGANISMS

- 

### TEMPLATES

- 

### PAGES

- 

## OBJECTIVES

- All multiples of 9 will get the same symbol to get the mind reader portion to work.
- Only one single html element
- Manage the state with JS
- On a reload of the screen we should start at page 1

### VARIABLES

- goButton
- nextButton
- resetButton
- currentPage
- symbols[]
- 
- pages
    - Array of objects
    - use index of array to pick object to match current page


## FUNCTIONS

- setPage()
  - when a button is clicked we update the currentPage in the state object to reflect the indended
    - click on nextButton will increment the currentPage in state by 1
    - click on the resetButton will set the currentPage back to page 1
- reset()
- create99Symbols()

let symbols=[' ', ' ', ' ']  
let arr=[]  
for (let i=0; i<100; i++) {  
  arr.push_(i+""+symbols[i %9]);  
  }  


## PROCEDURES

- 

### INIT

- State is initialized
- Page renders with page 1 content

