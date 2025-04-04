# Roman Numeral Converter

Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

| Roman numerals | Arabic numerals |
| :------------: | :-------------: |
| M | 1000 |
| CM | 900 |
| D	| 500 |
| CD | 400 |
| C	| 100 |
| XC | 90 |
| L | 50 |
| XL | 40 |
| X | 10 |
| IX | 9 |
| V | 5 |
| IV | 4 |
| I | 1 |

## User Stories:
1. You should have an input element with an id of "number"
2. You should have a button element with an id of "convert-btn"
3. You should have a div, span or p element with an id of output
4. When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
5. When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
6. When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
7. When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
8. When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
9. When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
10. When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
11. When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"