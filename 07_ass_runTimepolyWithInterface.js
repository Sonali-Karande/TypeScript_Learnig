;
var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log("Organizer Detail:\nOrganizer ID:".concat(this.id, "\nOrganizer Name:").concat(this.name));
    };
    return Organizer;
}());
var Event1 = /** @class */ (function () {
    function Event1(id, name, description, startTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
    }
    Event1.prototype.display = function () {
        console.log("Event Detail:\nEvent ID:".concat(this.id, "\nEvent Name:").concat(this.name, "\nEvent Description:").concat(this.description, "\nEvent Time:").concat(this.startTime));
    };
    return Event1;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log("Venue Detail:\nVenue ID:".concat(this.id, "\nVenue Name:").concat(this.name, "\nVenue Description:").concat(this.description, "\nVenue Address:").concat(this.address));
    };
    return Venue;
}());
var objEvenMgmApp = new Organizer(1, "Sonali");
objEvenMgmApp.display();
console.log("===========================================================================");
objEvenMgmApp = new Event1(1, "Birthday Party...", "Birthday Celebration", "7 PM");
objEvenMgmApp.display();
console.log("===========================================================================");
objEvenMgmApp = new Venue(1, "Taradevi lawns", "Beautiful garden...", "Near Bhairavnath Vidyalaya, High School Road, Bhigwan, Maharashtra 413130");
objEvenMgmApp.display();
