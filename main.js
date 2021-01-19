const text = document.getElementById('demo');

text.innerHTML = text.innerText
  .split('')
  .map(letter => `<span style="color: #${Math.round(Math.random() * 999)};">${letter}</span>`)
  .join('');