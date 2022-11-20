var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        // calling parent class constructor.
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log("Organizer Detail:\nOrganizer ID:".concat(this.id, "\nOrganizer Name:").concat(this.name));
    };
    return Organizer;
}());
var Event1 = /** @class */ (function (_super) {
    __extends(Event1, _super);
    // constructor 
    function Event1(id, name, description, startTime) {
        var _this = 
        // calling parent class constructor.
        _super.call(this, id, name) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.startTime = startTime;
        return _this;
    }
    // overriding parent class print method .
    Event1.prototype.display = function () {
        //super.display();
        console.log("Event Detail:\nEvent ID:".concat(this.id, "\nEvent Name:").concat(this.name, "\nEvent Description:").concat(this.description, "\nEvent Time:").concat(this.startTime));
    };
    return Event1;
}(Organizer));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    // constructor 
    function Venue(id, name, description, address) {
        var _this = 
        // calling parent class constructor.
        _super.call(this, id, name) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.address = address;
        return _this;
    }
    // overriding parent class print method .
    Venue.prototype.display = function () {
        console.log("Venue Detail:\nVenue ID:".concat(this.id, "\nVenue Name:").concat(this.name, "\nVenue Description:").concat(this.description, "\nVenue Address:").concat(this.address));
    };
    return Venue;
}(Organizer));
var objEvenMgmApp = new Organizer(1, "Sonali");
objEvenMgmApp.display();
console.log("===========================================================================");
objEvenMgmApp = new Event1(1, "Birthday Party...", "Birthday Celebration", "7 AM");
objEvenMgmApp.display();
console.log("===========================================================================");
objEvenMgmApp = new Venue(1, "Taradevi lawns", "Beautiful garden...", "Near Bhairavnath Vidyalaya, High School Road, Bhigwan, Maharashtra 413130");
objEvenMgmApp.display();
// let organizer: Organizer[] = new Array(new Organizer(1,"Sonali"),new Event1(1,"Birthday Party...","Birthday Celebration","7 AM"),new Venue(1,"Taradevi lawns","Beautiful garden...","Near Bhairavnath Vidyalaya, High School Road, Bhigwan, Maharashtra 413130"));
// for (const item of organizer) {
//     console.log(item);
//     console.log(organizer);
//    // console.log(Organizer[item]);
// }
// for (const key in objEvenMgmApp) {
//     console.log(objEvenMgmApp[key]);
//     }
