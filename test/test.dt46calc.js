var assert = chai.assert;

describe('dt46calc', function() {
    it('should return values from dt46 table', function() {
        assert.strictEqual(dt46calc(60, 0), 175);
        assert.strictEqual(dt46calc(60, 2000), 89);
        assert.strictEqual(dt46calc(110, 100), 276);
        assert.strictEqual(dt46calc(110, 1600), 138);
        assert.strictEqual(dt46calc(84, 603), 162);
    });
});
