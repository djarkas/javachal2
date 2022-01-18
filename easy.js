//  Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."



var students = [
    { fname: "Dina", lname: "Jarkas" ,age: 23 },
    { fname: "Hillary", lname: "Este" ,age: 31 },
    { fname: "Tom", lname: "Alan", age: 29 },
   ];

   console.log(`Hello my name is  ${(students[0].fname)}  ${(students[0].lname)}   and I'm  ${(students[0].age)}  years old.`)