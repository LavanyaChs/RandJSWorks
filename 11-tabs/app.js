const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    var id = e.target.dataset.id;
    if (id) {
        //remove active from other buttons
        btns.forEach(item => {
            item.classList.remove('active');           
        })
        e.target.classList.add("active")
        //hide other articles
        articles.forEach(item => {
            item.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add("active")
    }
})