fetch('http://localhost:3000/api/data')
  .then(response => response.json())
  .then(data => {
    document.getElementById('data').innerText = data.message;
  });
