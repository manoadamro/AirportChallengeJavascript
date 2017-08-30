describe("Airport", function() {
    beforeEach(function() {
        airport = new Airport();
        var isClear = true;
    });

  describe ("Take off and Land", function () {
    it("should land a plane", function() {
      expect(airport.land("Concorde 671", isClear)).toEqual("Concorde 671 has landed.");
    });

    it("should be able to takeoff", function() {
      expect(airport.takeoff("Concorde 671", isClear)).toEqual("Concorde 671 has taken off.");
    });

    it("should confirm that a plane is no longer n the airport", function() {
      airport.land("Concorde 671", isClear);
      expect(airport.hangar).toContain("Concorde 671");
      airport.takeoff("Concorde 671", isClear);
      expect(airport.hangar).not.toContain("Concorde 671");
    });
  })

  describe ("Weather", function () {
    it("should not take off during stormy weather", function () {
      var isClear = false
      expect(airport.takeoff("Spitfire mk2", isClear)).toEqual("Spitfire mk2 could not take off.")
    });

    it("should take off during clear weather", function () {
      expect(airport.takeoff("Spitfire mk2", isClear)).toEqual("Spitfire mk2 has taken off.")
    });

    it("should not land during stormy weather", function () {
      var isClear = false
      expect(airport.land("Spitfire mk2", isClear)).toEqual("Spitfire mk2 could not land.")
    });

    it("should land during clear weather", function () {
      expect(airport.land("Spitfire mk2", isClear)).toEqual("Spitfire mk2 has landed.")
    });
  })

  describe ("Capacity", function () {
    it ("should not exceed capacity", function () {
      for (var i = 0; i < airport.capacity; i++) {
        airport.land("Plane " + i, true)
      }
      expect(airport.land("Plane X", true)).toEqual("Airport full!")
    })

    it ("should have a default capacity of " + DEFAULT_AIRPORT_CAPACITY, function () {
      expect(airport.capacity).toEqual(DEFAULT_AIRPORT_CAPACITY)
    })

    it ("should allow capacity to be overridden", function () {
      airport = new Airport(10);
      expect(airport.capacity).toEqual(10)
    })
  })
});
