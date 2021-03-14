if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.querySelector('.mobile-only').style.display = 'block';
}else{
    document.querySelector('.mobile-only').style.display = 'none';
}