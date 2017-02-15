var test = require('../js/script.js');

describe("Manipulation with variable test", function() {
  it("length of questions", function() {
  	var result;
  	result = test.questions.length;
    expect(result).toEqual(3);
  });

  it("title of test", function() {
  	var result;
  	result = test.title;
  	expect(result).toEqual("Geography test");
  });

  it("correct answers", function() {
  	var result;
  	result = test.correct;
  	expect(result).toEqual(['Vienna', 'Canberra', 'Bern']);
  });
});