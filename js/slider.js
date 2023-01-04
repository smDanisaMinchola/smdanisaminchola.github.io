(function(){
    /*variables*/
    /* los tres punto para convertirlo en array*/
        const sliders = [...document.querySelectorAll('.testimony__body')];
        /* una constante para el boton siguiente con un id de netx */
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    /*variable */
    let value;   

    /* cada que le dent clic al boton quiero qeuese ejecute una funciion*/
    buttonNext.addEventListener('click', ()=>{
        /*le damos un argumneto de 1 */
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
          /*le damos un argumneto de -1 */
        changePosition(-1);
    });
/*crear la funcio nquese lleme changeposition y que tenga el slider actual
 y quiero obtenr el elemnto de la clase que se llama  testimony_body-show */
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
      
        value = Number(currentTestimony);
         /* */
        value+= add;

/*si el valor actual es a slider */
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            /*si el valor es  igual a cero entonces significa que estmos en el rpimer elementto */
            value = value === 0 ? sliders.length  : 1;
        }
/*hace que los elemento se muestre */
        sliders[value-1].classList.add('testimony__body--show');

    }

})();