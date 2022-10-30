const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition(){
    /*When the button is clicked...*/
    for(let i =0; i<sectBtn.length /*Button length*/; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); /*For all other classes, replace the active-button class with an empty string.*/
            this.className += ' active-btn';
        });
    }

    /*Sections Active*/
    allSections.addEventListener('click', (e)=>{
        /*Targets the data set/data-id (HTML) of the button that has been clicked on:*/
        const id = e.target.dataset.id;
        if(id){
            /*Remove the active class (note: active-btn is just used for styling) for all of the rest of the classes (the ones that haven't been clicked on):*/
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            /*Add the active class to whatever button was clicked on:*/
            e.target.classList.add('active');

            /*Hide other sections (that are not active/haven't been clicked on):*/
            sections.forEach((section)=>{
                section.classList.remove('active');
            }) /*Note the difference between sections and sectBtns (the first refers to the <section> classes in the HTML code, and the second refers to the <div> classes in the HTML code).*/

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    /*Toggle Theme*/
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransition();