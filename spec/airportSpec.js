describe("Airport", function() {
    beforeEach(function() {
        airport = new Airport();
    });

  it("should land a plane", function() {
    expect(airport.land("Concorde 671")).toEqual("Concorde 671 has landed.");
  });

  it("should be able to takeoff", function() {
    expect(airport.takeoff("Concorde 671")).toEqual("Concorde 671 has taken off.");
  });

  it("should confirm that a plane is no longer n the airport", function() {
    airport.land("Concorde 671");
    expect(airport.hangar).toContain("Concorde 671");
    airport.takeoff("Concorde 671");
    expect(airport.hangar).not.toContain("Concorde 671");
  });






});
