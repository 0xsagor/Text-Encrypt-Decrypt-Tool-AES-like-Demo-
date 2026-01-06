function encrypt() {
  const text = document.getElementById("text").value;
  const key = document.getElementById("key").value;
  if (!text || !key) return;

  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) + key.length);
  }

  document.getElementById("result").value = btoa(result);
}

function decrypt() {
  const data = atob(document.getElementById("result").value);
  const key = document.getElementById("key").value;

  let text = "";
  for (let i = 0; i < data.length; i++) {
    text += String.fromCharCode(data.charCodeAt(i) - key.length);
  }

  document.getElementById("text").value = text;
}
