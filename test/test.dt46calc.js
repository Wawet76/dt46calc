var assert = chai.assert;

describe("dt46calc", function() {
    it("should return values from dt46 table", function() {
        assert.strictEqual(dt46calc(60, 0).minSize, 175);
        assert.strictEqual(dt46calc(60, 2000).minSize, 89);
        assert.strictEqual(dt46calc(110, 100).minSize, 276);
        assert.strictEqual(dt46calc(110, 1600).minSize, 138);
        assert.strictEqual(dt46calc(84, 603).minSize, 162);
    });

    it("should use first line if weight is less than 60kg", function() {
        assert.strictEqual(dt46calc(59, 0).minSize, 175);
        assert.strictEqual(dt46calc(48, 2000).minSize, 89);
    });

    it("should use last line if weight is more than 110kg", function() {
        assert.strictEqual(dt46calc(130, 100).minSize, 276);
        assert.strictEqual(dt46calc(111, 1600).minSize, 138);
    });

    it("should round weight half down", function() {
        assert.strictEqual(dt46calc(60.2, 0).weight, 60);
        assert.strictEqual(dt46calc(60.5, 0).weight, 61);
        assert.strictEqual(dt46calc(60.7, 0).weight, 61);
    });

    it("should parse weight input", function() {
        assert.strictEqual(dt46calc(60.0, 0).weight, 60);
        assert.strictEqual(dt46calc("60", 0).weight, 60);
        assert.strictEqual(dt46calc("60.0", 0).weight, 60);
        assert.strictEqual(dt46calc("60,7", 0).weight, 61);
    });

    it("should report invalid weight", function() {
        assert.strictEqual(dt46calc("toto", 0).error, "invalidWeight");
    });

    it("should round down jump number", function() {
        assert.strictEqual(dt46calc(60, 99.9).jumps, 99);
    });

    it("should parse jumps input", function() {
        assert.strictEqual(dt46calc(60, 100.0).jumps, 100);
        assert.strictEqual(dt46calc(60, "100").jumps, 100);
    });

    it("should report invalid jumps", function() {
        assert.strictEqual(dt46calc(60, "toto").error, "invalidJumps");
    });

    it("should report more than 2000 jumps", function() {
        assert.strictEqual(dt46calc(60, 2001).error, "2000Jumps");
    });

});
