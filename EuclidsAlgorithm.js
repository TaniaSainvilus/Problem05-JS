class EuclidsAlgorithm {
    gcd(a, b){
        let divisor = -1;
        if (a == 0) {
            return b
        }
        else if (b == 0) {
            return a
        }
        else
            return this.gcd(b,(a%b)); 
    }
}

module.exports = EuclidsAlgorithm;



