document.getElementById('progLangs').addEventListener('click', function() {
    var hiddenContent = document.querySelector('.hiddenProgLangs');
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
      hiddenContent.style.display = 'block';
    } else {
        hiddenContent.style.display = 'none';
    }
  });