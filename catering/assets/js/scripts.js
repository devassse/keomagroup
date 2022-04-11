
const btnNavEl = document.querySelector('.nav-mobile');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
    headerEl.classList.toggle('nav-open')
});

const allLinks = document.querySelectorAll('a');
allLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const href = link.getAttribute('href');

        //Scroll to Top
        if (href === "#") window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        //Scroll to Section
        if (href !== "#" && href.startsWith('#')){
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({
                behavior: 'smooth'
            })
        }

        //Close mobile navigation
        if(link.classList.contains('main-navigation-link')){
            headerEl.classList.toggle('nav-open')
        }
    });
});

// Sticky Effect
const sectionHeroEl = document.querySelector('.hero-section')

const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(!ent.isIntersecting) {
        document.body.classList.add('sticky')
    }
    if(ent.isIntersecting) {
        document.body.classList.remove('sticky')
    }
}, 
{
    root: null,
    threshold: 0
});
obs.observe(sectionHeroEl) 