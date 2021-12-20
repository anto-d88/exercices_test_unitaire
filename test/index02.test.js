import chai from "chai";

const assert = chai.assert;

import { FizzBuzz } from "../02KATA/fizzbuzz.js"

describe("#FizzBuzz", function(){


    it("should test if number % 3 & % 5 == fizzbuzz", function(){

        assert.equal(FizzBuzz()[15],"fizzbuzz","FizzBuzz ne retourne pas la bonne valeur")
    })

    it("should test if number % 3 == fizz", function(){

    assert.equal(FizzBuzz()[3],"fizz","FizzBuzz ne retourne pas la bonne valeur")
    })

    it("should test if number % 5 == buzz",function(){

        assert.equal(FizzBuzz()[5],"buzz","FizzBuzz ne retourne pas la bonne valeur")
    })

    it("should else number == number", function(){

        assert.isNumber(FizzBuzz()[4],"Ce n'st pas un nombre")
    })

    it("should test return string", function(){

        assert.isString(FizzBuzz()[5],"Ce n'est pas un string")
    })

})
