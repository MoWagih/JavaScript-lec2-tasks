let userDegree = prompt("Please enter your Degree")

if (userDegree == "") {         
    ProgressEvent.default();
} else {

}

if (userDegree > -1 ) {
   
    if (userDegree < 101) {
        
        if (userDegree >= 50) {
            if (userDegree <= 64)
            document.write("Your Estimate is: Acceptable")
            if (userDegree >= 65) {
                if (userDegree <= 74)
                document.write("Your Estimate is: Good")
                if (userDegree >= 75) {
                    if (userDegree <= 84)
                    document.write("Your Estimate is: Very Good")
                    if (userDegree >= 85) {
                        if (userDegree <= 100)
                        document.write("Your Estimate is: Excellent")   
                    } else {
            
                    }   
                } else {
        
                }   
            } else {
    
            }
        } else {
            document.write("Sorry you are Failed :-( ")
        }

    } else {
        document.write("Your degree is: not right value");
    }

} else {
    document.write("Your degree is: not right value");
}