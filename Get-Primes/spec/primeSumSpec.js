'use strict';

var findPrimes = require('../src/findPrimes');

(function(){
  describe("Should return the correct prime numbers", function() {

    it('should return [ 2, 3, 5, 7, 11,  13,  17,  19,  23,  29,  31,  37,  41,  43,  47,  53,  59,  61,  67,  71,  73,  79,  83, 89, 97 ] for 100', function() {
      expect(findPrimes(100)).toEqual([ 2, 3, 5, 7, 11,  13,  17,  19,  23,  29,  31,  37,  41,  43,  47,  53,  59,  61,  67,  71,  73,  79,  83, 89, 97 ]);
    });
    it('should return [2, 3] for 3', function(){
      expect(findPrimes(3)).toEqual([2,3]);
    });

    it('should return [2, 3, 5, 7, 11, 13, 17] for 18', function(){
      expect(findPrimes(18)).toEqual([2, 3, 5, 7, 11, 13, 17]);
    });

    it('should return [2, 3, 5, 7, 11, 13] for 16', function(){
      expect(findPrimes(16)).toEqual([2, 3, 5, 7, 11, 13]);
    });

    it('should return [2, 3, 5, 7, 11, 13, 17, 19] for 21', function(){
      expect(findPrimes(21)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
    
    it('should return undefined for -2', function(){
      expect(findPrimes(-2)).toEqual(undefined);
    });

    it('should return undefined for 0', function(){
      expect(findPrimes(0)).toEqual(undefined);
    });
      
    it('should return undefined for [3]', function(){
      expect(findPrimes([3])).toEqual(undefined);
    });

    it('should return undefined for "hello"', function(){
      expect(findPrimes('hello')).toEqual(undefined);
    });

    it('should return undefined if no argument was passed in', function(){
      expect(findPrimes()).toEqual(undefined);
    });

  });
})();