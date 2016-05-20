var assert = chai.assert;

describe("dt46calc", function() {
    it("should return values from dt46 table", function() {
        assert.strictEqual(dt46calc(60, 0), 175);
        assert.strictEqual(dt46calc(60, 2000), 89);
        assert.strictEqual(dt46calc(110, 100), 276);
        assert.strictEqual(dt46calc(110, 1600), 138);
        assert.strictEqual(dt46calc(84, 603), 162);
    });

    it("should use first line if weight is less than 60kg", function() {
        assert.strictEqual(dt46calc(59, 0), 175);
        assert.strictEqual(dt46calc(48, 2000), 89);
    });

    it("should use last line if weight is more than 110kg", function() {
        assert.strictEqual(dt46calc(130, 100), 276);
        assert.strictEqual(dt46calc(111, 1600), 138);
    });

    it("should round weight half down", function() {
        assert.strictEqual(dt46calc(60.2, 0), 175);
        assert.strictEqual(dt46calc(60.5, 0), 178);
        assert.strictEqual(dt46calc(60.7, 0), 178);
    });

    it("should round down jump number", function() {
        assert.strictEqual(dt46calc(60, 99.9), 175);
    });
});
