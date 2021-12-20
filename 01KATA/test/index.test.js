import chai from "chai";

const assert = chai.assert;

import { loop } from "../index.js"

describe("#loop()", function(){


    it("should do the test return array", function(){

        assert.isArray(loop(),"loop ne retourne pas un array")

    })

    it("should do the testloop array return ", function(){
        
        assert.equal(loop()[0].test,"\n"+"#"
                                   +"\n"+"##"
                                   +"\n"+"###"
                                   +"\n"+"####"
                                   +"\n"+"#####"
                                   +"\n"+"######"
                                   +"\n"+"#######", "la valeur est differente")
    })
&
    it("should do the test length of the array ", function(){

        assert.strictEqual(loop().length,7,"la longueur de l'array est fause")
        
    })

    it("should do the test of the type in array", function(){

        assert.isString(loop()[0].test,"la valeur a l'interieur de l'array n'est pas un string")
        
    })
})