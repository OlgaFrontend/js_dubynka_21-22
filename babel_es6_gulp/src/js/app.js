'use strict'

$(function() {
    //data for test
    let test = {
    title: "Geography test",
    questions: ['The capital of Austria', 'The capital of Australia', 'The capital of Switzerland'],
    answers: [['Vienna', 'Brussels', 'Sofia'],
              ['Sydney', 'Canberra', 'Melbourne'],
              ['Bordeaux', 'Stockgolm', 'Bern']],
    correct: ['Vienna', 'Canberra', 'Bern']
    }          
    
    //write down all content into localStorage
    try {
    	let testStr = JSON.stringify(test);
    	localStorage.setItem('test', testStr);
    } catch (e) {
    	alert(e);
    }

    //get all content from localStorage
    try {
    	let testGet = localStorage.getItem('test');
    	testGet = JSON.parse(testGet);
    } catch (e) {
    	alert(e);
    }

    //insert our template on page
    let html = $('#test').html(); 
    let content = tmpl(html, test); 
    $('body').append(content); 

    //popup
    let score = 0;
    $("#modal-launcher").click(function(){
        $('input:checked').each(function () {
            let code = $(this).attr('id');
            for (let c = 0; c<test.correct.length; c++){
                if(code == test.correct[c]){
                    score += 1;
                    console.log('c', c);
                }
            }
        });
        
        if (score>2) {
            $("#result").append('Great! You have 3 scores!!!');
        } else {
            $("#result").append( score + ' ' + 'scores... Try again, please!');
        }

        $("#modal-background").css("display", "block"); 
        $("#modal-content").fadeTo(300, 1);
        return false
    });
}); 

