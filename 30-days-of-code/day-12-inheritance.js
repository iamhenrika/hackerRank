class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor her
  constructor(firstName, lastName, idNumber, scores) {
    super(firstName, lastName);
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = parseInt(idNumber);
    this.scores = scores;
    this.calculate = () => {
      let sum = 0;
      this.scores.forEach((element) => {
        sum += element;
      });
      const average = Math.ceil(sum / this.scores.length);

      /*
       *   Method Name: calculate
       *   @return A character denoting the grade.
       */
      // Write your method here
      let letter = "";
      if (average >= 90 && average <= 100) letter = "O";
      else if (average >= 80 && average < 90) letter = "E";
      else if (average >= 70 && average < 80) letter = "A";
      else if (average >= 55 && average < 70) letter = "P";
      else if (average >= 40 && average < 55) letter = "D";
      else if (average < 40) letter = "T";

      return letter;
    };
  }
}
