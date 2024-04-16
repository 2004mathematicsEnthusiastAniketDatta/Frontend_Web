"use strict";
const typescriptor = { dbId: 1234, email: "typescriptor@.js", userId: 2211, starting() {
        return "Starting";
    }, getCoupon(couponname) { return 10; } };
typescriptor.email = "typescriptor@.ts";
console.log(typescriptor);
console.log(typescriptor.getCoupon("typescriptor"));
console.log(typescriptor.starting());
