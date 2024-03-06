window.addEventListener('scroll', function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const scrollPosition = window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / totalHeight) * 100;
  
    document.querySelector('.progress-bar').style.width = progress + '%';
  });