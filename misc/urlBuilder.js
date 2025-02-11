/**
 * GIVEN:
 * 
 *  |  ID  |  NAME                 | ParentID |
 *  --------------------------------------------
 *  |  1   | 'home'                |  null    |
 *  |  2   | 'products'            |  null    |
 *  |  3   | 'consoles'            |  2       |
 *  |  4   | 'ps4'                 |  3       |
 *  |  5   | 'ps5'                 |  3       |
 *  |  6   | 'golf-clubs'          |  2       | 
 *  |  7   | 'taylor-made-9-iron   |  6       |
 * 
 * 
 * CREATE:
 * 
 * A function that takes in an ID number and outputs all related names 
 * as a URL path. Relative data will be based off a the parentID.
 * 
 * 
 * EX:
 * 
 * input: 7
 * output: 'products/golf-clubs/taylor-made-9-iron'
 * 
 */