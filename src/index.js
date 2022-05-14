//import '@/styles/index.scss'
import '@/styles/index.scss'
import home from '@/js/home'
import tweet  from './js/tweet'
import { renderTweets } from './js/sendTweet'


const sideLeft = document.createElement('div')
sideLeft.classList.add('sides')

const center = document.createElement('div')
center.classList.add('center')


const centerTop = document.createElement('div')
centerTop.classList.add( 'tweet')
centerTop.appendChild(home())
centerTop.appendChild(tweet())
const centerBottom = document.createElement('div')
centerBottom.classList.add('tweets')
centerBottom.setAttribute('id', 'tweetsDisplay')

center.append(centerTop, centerBottom)

const sideRight = document.createElement('div')
sideRight.classList.add( 'sides')



const app = document.querySelector('#root')
app.classList.add('flex')
app.append(sideLeft, center, sideRight)

renderTweets()