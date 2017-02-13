var findPrimes = function findPrimes(n) {
    if (typeof n !== 'number') return undefined;
    if (n < 2) return undefined;
    var sieve = {},
        num = 3,
        primeSum = [2];

    while (num <= n){
        if (!sieve[num]) {
            for (var i = num; i*num <= n; i++){
                sieve[i*num] = true;
            }
            primeSum.push(num);
        }
        //Skip even numbers
        num += 2;
    }
    return primeSum;
}
module.exports = findPrimes;