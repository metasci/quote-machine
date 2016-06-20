

//loop through this list of colors
var colors = ['#FF9797', '#FE98F1', '#B89AFE', "#9588EC", "#B8E2EF", "#63E9FC", "#8BFEA8", "#DFB0FF", "#EEF093", '#FF9797'];


var $quote = $('.quote'); 
var $quoteBox = $('.quote-box');
var $authorBox = $('.author');
var $body = $('body');
var $quoteButton = $('#newQuote');
var $buttons = $('.link');
var $tweet = $('#tweet');

var currentQuote = '';
var currentAuthor = '';

function newQuote(){
    
    $.ajax({
        headers: {
            "X-Mashape-Key": "gKGhkyjZe3mshjyTCsaWNk1jybe1p1wbZCTjsnyzrPcwfKxGcg",
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        type: 'GET',
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
        success: function(info) {
            var i = Math.floor(Math.random()*10);
            $buttons.animate({backgroundColor: colors[i]}, 1000);
            $body.animate({backgroundColor: colors[i], color: colors[i]}, 1000);
            
            
            var quoteInfo = JSON.parse(info);
            
            currentQuote = quoteInfo.quote;
            currentAuthor = quoteInfo.author;
            $quoteBox.hide().html(' '+currentQuote).fadeIn(800);
            $authorBox.hide().html('<br><br>'+currentAuthor).fadeIn(800);
            
            
        },
        error: function() {
            alert('Error!');
        }
    });
}



$(document).ready(function(){
    //change on click
    newQuote();
    $quoteButton.on('click', newQuote);
    $tweet.on('click', function() {
        $tweet.attr('href', 'https://twitter.com/intent/tweet?url=DR3AM_B1GG&text='+encodeURIComponent('"'+currentQuote+'"'+'   -'+currentAuthor));
    });
  
});