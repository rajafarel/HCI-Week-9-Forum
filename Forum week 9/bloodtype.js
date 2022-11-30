function canGiveBlood(d, r) {
    if (d.charAt(1) == "-") {
      if (d.charAt(0) == "O") {
        return true;

      } else if (d.charAt(0) == "A") {
        if (r.charAt(0) == "A" || r == "AB+") {
          return true;

        } else {
          return false;
        }
      }
    } else if (d.charAt(0) == "A") {
        if (r == "A+" || r == "AB+") {
          return true;
  
        } else {
          return false;
        }
    } else if (d.charAt(0) == "B") {
      if (r.charAt(0) == "B" || r == "AB") {
        return true;

      } else {
        return false;
      }
   
   
    } else if (d.charAt(0) == "B") {
      if (r == "B+" || r == "AB+") {
        return true;

      } else {
        return false;
      }
    } else if (d == "AB+") {
      if (r == "AB+") {
        return true;

      } else {
        return false;
      }
    } else if (d == "AB-") {
      if (r == "AB+" || r == "AB-") {
        return true;

      } else {
        return false;
      }
    } else if (d.charAt(1) == "+") {
        if (d.charAt(0) == "O") {
          if (r.charAt(1) == "+" || r.charAt(2) == "+") {
            return true;
  
          } else {
            return false;
          }
        }
    }
  }
  
  var x = canGiveBlood("O-", "A+");
  var y = canGiveBlood("A-", "B+");
  var z = canGiveBlood("A-", "AB+");
  
  console.log(x);
  console.log(y);
  console.log(z);