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

  // it ("generates weather randomly", function () {
  //   var clear = 0
  //   var stormy = 0
  //   for (var i = 0; i < 100; i++) {
  //     weather = Weather.generate()
  //     if (weather == 'stormy') {
  //       stormy++
  //     }
  //     else {
  //       clear++
  //     }
  //   }
  //   expect(stormy).toBeGreaterThan(30)
  //   expect(clear).toBeGreaterThan(30)
  // })

  it("should not take off during stormy weather", function () {
    expect(airport.takeoff("Spitfire mk2", false)).toEqual("Spitfire mk2 could not take off.")
  });

  it("should take off during clear weather", function () {
    expect(airport.takeoff("Spitfire mk2", true)).toEqual("Spitfire mk2 has taken off.")
  });

  it("should not land during stormy weather", function () {
    expect(airport.land("Spitfire mk2", false)).toEqual("Spitfire mk2 could not land.")
  });

  it("should land during clear weather", function () {
    expect(airport.land("Spitfire mk2", true)).toEqual("Spitfire mk2 has landed.")
  });
});
