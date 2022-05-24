export default function leftSide(leftButton) {
  const buttonDiv = document.createElement('div')
  const button = document.createElement('div')
  button.classList.add('leftButton')
  button.classList.add('leftIcon')
  button.innerHTML = `${leftButton.img} ${leftButton.text}`
  buttonDiv.appendChild(button)
  return buttonDiv
}
