//using selectors inside the element

const questions = document.querySelectorAll('.question')
questions.forEach(qtn => {
    const btn = qtn.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== qtn) {
              item.classList.remove('show-text')
          }  
        })
        qtn.classList.toggle('show-text')
    })
})





// traversing the dom

// const question = document.querySelector('.question');
// const questionBtns = document.querySelectorAll('.question-btn')
// console.log(questionBtns);
// questionBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//        e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//     })
// });