let yourCity = prompt("Please enter your city to get discount: ");
let coursePrice = 3000;


switch (yourCity) {
   
    case "alexandria":{
    document.write("You have no discount");
    break;
    }

    case "cairo":{
        let discount = (10/100);
        let finalPrice = coursePrice - (discount*coursePrice);
        document.write("You got 10% discount, and you must pay: " + finalPrice + " EGP");
        break;
    }

    case "aswan":{
        let discount = (25/100);
        let finalPrice = coursePrice - (discount*coursePrice);
        document.write("You got 25% discount, and you must pay: " + finalPrice + " EGP")
        break;
    }

    default:{
        let discount = (20/100);
        let finalPrice = coursePrice - (discount*coursePrice);
        document.write("You got 20% discount, and you must pay: " + finalPrice + " EGP")
        break;
    }
}

