# CSS Display:

display: inline 
block
inline-block
none 
flex 
grid 



# Display-flex:

there are two main properties, which works under display flex;

1. Justify-content
2. align-content
3. align items
4. gap
5. wrap


Justify-content: it work in the x-axis which flex-direction is set to row;
align-content:  aligin content work towards y-axis while flex-direction is set to row;

--------------------------------------------------------------------------------------------------------
Date: 04-OCT-2025, index-9

# display-grid:

1. grid-template-rows 
2. grid-template-colums --> repeat(4, 100px)
3. colum-gap
4. row-gap
5. gap

Display grid is used to divide the elements into rows and colums, using the two elements;

1. grid-template-rows 
2. grid-template-colums


*  grid-template-colums: it is used to define number of columns and their thier width;
*  grid-template-rows : it only defines the height of the box, but not number of rows;
*  colum-gap: it is used to define the colum gap
*  row-gap: it is used to define row gap
*  gap: defines fst postion for rows, 2nd for col;


repeat()---> this is the feature used to define the grid-template-colums to specifed
 number of columns and a common width for all of them.




 # Item-properties:
 it is used to specify the starting and ending of the item in the grid;

 1. grid-column-start 
 2. grid-column-end 
 3. grid-row-start
 4. grid-row-end


 Ex:
 grid-row-start: 2;
 grid-row-end:4;
 grid-column: 3/4;
