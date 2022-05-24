
let tweets = JSON.parse(localStorage.getItem('tweets')) || []

const Tweet = class {
  constructor(text, author) {
    this.text = text
    this.author = author
    const time = new Date()
    this.time= `${time.getDate()}/${time.getMonth()}, ${time.getHours()}:${time.getMinutes()}`
  }
}
export default function sendTweet() {
  let input = document.getElementById('tweetInput')
  console.log(input)
  let newTweet = new Tweet(input.value, 'Me')
  input.value = input.getAttribute('placeholder')
  tweets.push(newTweet)
  localStorage.setItem('tweets', JSON.stringify(tweets))
  renderTweets()
}

export function renderTweets() {
  console.log(tweets)
  let displayArea = document.getElementById('tweetsDisplay')
  while (displayArea.firstChild) {
    displayArea.removeChild(displayArea.firstChild)
  }
  tweets.forEach((tweet) => {
    const tweetDiv = document.createElement('div')
    tweetDiv.classList.add('tweetText')
    tweetDiv.innerHTML =`
     <div class="flex">
        <div  class="tweetArea">
          <img src = '/assets/default_profile_normal.png' alt='avatar'/>
        </div>
          <div>
            <b>${tweet.author}</b>
            <small>	&middot; ${tweet.time}</small>
            <div>${tweet.text}</div>
          </div>
     </div>
        `
    displayArea.appendChild(tweetDiv)
  })
}
