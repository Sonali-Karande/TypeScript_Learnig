var Organizer1 = /** @class */ (function () {
    function Organizer1() {
    }
    Organizer1.prototype.display = function (id, name) {
        console.log("Organizer Detail:\nOrganizer ID:".concat(id, "\nOrganizer Name:").concat(name));
        return 0;
    };
    return Organizer1;
}());
var organiser = new Organizer1();
organiser.display(1, "sonali");
organiser.display("Swati", "Pune");
organiser.display("Angular Developer", "sonali");
organiser.display(123, "345");
