

describe("Hello world", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });

    it("is not null"), function() {
    	expect( helloWorld().not.toBeNull());
    };

    describe("Hello world", function() {

	    beforeEach( function(){
	    	this.foo = helloWorld();
	    });	

	    it("says world", function() {
	        expect(this.foo).toContain("world");
	    });
});
});




