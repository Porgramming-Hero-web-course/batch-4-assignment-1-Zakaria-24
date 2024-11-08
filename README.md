### 1.The significance of union and intersection types in Typescript.

- Union Types allow a variable to hold multiple types. They enable developers to specify that a variable can be one of several types, making the code more flexible. For example:
# const result = string | number | boolean;


- Intersection Types combine multiple types into one, where an object must satisfy all included types. They are used when a value needs to have all properties of multiple types simultaneously:
# const result = string & number & boolean;


### Significance
- union types : flexibility- for using several type(alternatively) in a variable

- Intersection types enable building complex types by merging properties, ensuring values have all necessary characteristics.

