document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {

  const dynamicElement = document.querySelector('#dynamic-div');
  document
    .querySelector('#m1')
    .addEventListener('click', async (event) => {
      const result = await fetch('/static/one.html');
      const htmlString = await result.text()
      dynamicElement.innerHTML = htmlString
    })

  document
    .querySelector('#m2')
    .addEventListener('click', async (event) => {
      const result = await fetch('/static/two.html');
      const htmlString = await result.text()
      dynamicElement.innerHTML = htmlString
    })
}
