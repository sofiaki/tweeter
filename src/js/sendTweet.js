let tweets = JSON.parse(localStorage.getItem("tweets")) || [];

const Tweet = class {
  constructor(text) {
    this.text = text;
  }
};
export default function sendTweet(){
    let input= document.getElementById('tweetInput').value
    console.log(input)
    let newTweet= new Tweet(input)
    input=" "
    tweets.push(newTweet)
    localStorage.setItem('tweets', JSON.stringify(tweets))
    renderTweets()
    
}

export  function renderTweets(){
console.log(tweets)
    let displayArea = document.getElementById("tweetsDisplay");
  while (displayArea.firstChild) {
    displayArea.removeChild(displayArea.firstChild);
  }
  tweets.forEach(t => {
      const tweetDiv= document.createElement('div')
      tweetDiv.classList.add('tweetText')
        tweetDiv.textContent= t.text
    displayArea.appendChild(tweetDiv)
  });
}