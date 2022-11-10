console.log("Example of direction using enum");

enum CardinalDirections {
    North,
    East,
    South,
    West
  };
              
  
  console.log(CardinalDirections[0],CardinalDirections.North);
  console.log(CardinalDirections[1],CardinalDirections.East);
  console.log(CardinalDirections[2],CardinalDirections.South);
  console.log(CardinalDirections[3],CardinalDirections.West);
  console.log(CardinalDirections);
  
  console.log("Example of Days of week using enum");

  enum Days {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAYS,
    
}
console.log(Days);

console.log(Days[0],Days.SUNDAY);
console.log(Days[1],Days.MONDAY);
console.log(Days[2],Days.TUESDAY);
console.log(Days[3],Days.WEDNESDAY);
console.log(Days[4],Days.THURSDAY);
console.log(Days[5],Days.FRIDAY);
console.log(Days[6],Days.SATURDAYS);
console.log("Example of Status using enum");

enum AppStatus {  
    ACTIVE = 0,  
    INACTIVE = 1,  
    ONHOLD = 2,  
    ONSTOP = 3  
}  
console.log(AppStatus);

console.log(AppStatus[0],AppStatus.ACTIVE);  
console.log(AppStatus[1],AppStatus.INACTIVE); 
console.log(AppStatus[2],AppStatus.ONHOLD); 
console.log(AppStatus[3],AppStatus.ONSTOP); 


  