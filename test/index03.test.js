import chai from "chai";

const assert = chai.assert;

import { echequier } from "../03KATA/cheesboard.js"

describe("#echequier", function(){



    it("should do test echequier return un array", function(){

        assert.isArray(echequier(),"ce n'est pas un array")
    })

    it("should do test length array", function(){

        assert.equal(echequier().length,8,"lenght ne retourne pas la bonne valeur")
    })

    it("should do test return string", function(){

        assert.isString(echequier()[0].cheesboard,"ce n'est pas un string")
    })

    it("should do test values array return", function(){

        assert.equal(echequier()[0].cheesboard," # # # #" + "\n" + 
                                               "# # # # " + "\n" + 
                                               " # # # #" + "\n" + 
                                               "# # # # " + "\n" + 
                                               " # # # #" + "\n" + 
                                               "# # # # " + "\n" + 
                                               " # # # #" + "\n" + 
                                               "# # # # " + "\n", "ce n'est pas la bonne valeur")
    })

    it("should do test")

    it("should do test")
})
