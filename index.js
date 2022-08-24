
const value = document.getElementById('value');

let count = 0;
const btns = document.querySelectorAll('.btn');

// Target the whole buttons and makes a function of parameter btn
btns.forEach (function(btn){
    
    // Adds event listener to each buttons
    btn.addEventListener('click', function(e){

        // The listener is attached to the current class list.
        // NOTE: The (e) is event and any other name can be used.

        const buttons = e.currentTarget.classList;
        if(buttons.contains('decrease')){
            count--;
        }
        else if (buttons.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        
    
        
        // Changes the color of the number 
        if(count < 0){
            value.style.color= 'red';
        }
        else if(count > 0){
            value.style.color = 'green';
        }
        else{
            value.style.color = ' rgb(153, 249, 253);';
        }
        // Assigns count to the text content of value
        value.textContent = count;
    });
});