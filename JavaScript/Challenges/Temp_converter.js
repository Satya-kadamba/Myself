let choice = prompt("Enter the choice for conversion type \n 1. Celsius to Fahrenheit \n 2. Fahrenheit to celsius");

let temp = number("Enter the temperature value");


if (choice === "1")
{
    let F = (temp*9/5)+32;
    console.log(F);
    
}
else if (choice ==="2")
{
    let C = (temp-32)*5/9;
    console.log(C);
}
else
{
    console.log("Invalid Choice !! ");
    
}