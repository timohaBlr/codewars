function bouncingBall(h,  bounce,  window) {
    if (h<=0 || 0 >= bounce || bounce >= 1 || window >= h ) {
        return -1;
    } else if ( h * bounce < window) {
        return 1;
    } else {
        let result = 0;
        while (h *bounce > window) {
            result += 2;
            h = h* bounce
        }
        return result+1
    }

}

console.log(bouncingBall(30.0, 0.66, 1.5))

//Float parameter "h" in meters must be greater than 0
//Float parameter "bounce" must be greater than 0 and less than 1
//Float parameter "window" must be less than h.
//- h = 3, bounce = 0.66, window = 1.5, result is 3

//- h = 3, bounce = 1, window = 1.5, result is -1
//(Condition 2) not fulfilled)