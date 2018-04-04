module.exports = function(operand){
  return {
    "operator": "Add",
    "operands": [{
      "operator": "0",
      "operands": [{
        "operator": "0",
        "operands": [{
          "operator": "0",
          "operands": [{
            "operator": "0",
            "operands": [{
              "operator": "0",
              "operands": [{
                "operator": "0",
                "operands": [operand, operand]
              }, operand]
            }, operand]
          }, operand]
        }, {
          "operator": "0",
          "operands": [{
            "operator": "1",
            "operands": [{
              "operator": "0",
              "operands": [{
                "operator": "0",
                "operands": [{
                  "operator": "0",
                  "operands": [operand, operand]
                }, operand]
              }, operand]
            }]
          }, {
            "operator": "1",
            "operands": [{
              "operator": "0",
              "operands": [{
                "operator": "1",
                "operands": [{
                  "operator": "0",
                  "operands": [operand, operand]
                }]
              }, operand]
            }]
          }]
        }]
      }, operand]
    }, operand]
  }
}
