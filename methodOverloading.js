var Organizer1 = /** @class */ (function () {
    function Organizer1() {
    }
    Organizer1.prototype.display = function (id, name) {
        console.log("Organizer Detail:\nOrganizer ID:".concat(id, "\nOrganizer Name:").concat(name));
        return 0;
    };
    Organizer1.prototype.display = function (id, name, description, startTime) {
        //super.display();
        console.log("Event Detail:\nEvent ID:".concat(id, "\nEvent Name:").concat(name, "\nEvent Description:").concat(description, "\nEvent Time:").concat(startTime));
        return 0;
    };
    Organizer1.prototype.display = function (id, name, description, address) {
        console.log("Venue Detail:\nVenue ID:".concat(id, "\nVenue Name:").concat(name, "\nVenue Description:").concat(description, "\nVenue Address:").concat(address));
        return 0;
    };
    return Organizer1;
}());
var organiser = new Organizer1();
organiser.display(1, "sonali");
organiser.display(1, "sonali", "dfgh", "fhjj");
organiser.display(1, "sonali", "3445", "vghhh");
