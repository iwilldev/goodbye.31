const button = document.querySelector('#btn');
const container = document.querySelector('#container');

button.addEventListener('click', () => {
  createNotification();
})

function createNotification() {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.innerText = 'Nova Notificação!'
  container.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 2000)
}