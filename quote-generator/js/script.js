var quotes = [["It took me fifteen years to discover that I had no talent for writing, but I couldn't give it up because by that time I was too famous.","Robert Benchley"],["Work saves us from three great evils: boredom, vice and need.","Voltaire"],["Enquire not what boils in another's pot.","Thomas Fuller"],["Make sure you have finished speaking before your audience has finished listening.","Dorothy Sarnoff"],["Experience teaches slowly and at the cost of mistakes.","James A. Froude"]];

let newQuote = () =>{
    let index = Math.floor(Math.random()*(quotes.length));
    let [quote,author]=quotes[index];
    $("#text").html("<p>"+quote+"</p>");
    $("#author").html("<span>- "+author+"</span>");
    let tweet = "https://twitter.com/intent/tweet"+"?text=";
    console.log(encodeURIComponent(quote));
    tweet = tweet+encodeURIComponent(quote+"\n"+"- "+author);
    $("#tweet-quote").prop("href",tweet);
}

$(document).ready(newQuote);
$("#new-quote").click(newQuote);