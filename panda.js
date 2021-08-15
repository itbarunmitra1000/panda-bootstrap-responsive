// color all h2 tag
document.getElementById('color_change').style.color = 'blue';


document.getElementById('backpack').style.backgroundColor = 'tomato ';

const h2color = document.getElementsByTagName('h2');
for (const changeColor of h2color) {
    changeColor.style.color = 'lightblue ';
};


const allCardStyle = document.getElementsByClassName('card');
for (const cardStyle of allCardStyle) {
    cardStyle.style.borderRadius = '30px';
};

function clickButton() {
    console.log('Button is working');

}

const buyNowCustomBtn = document.getElementsByClassName('buy-now-button');
// buyNowCustomBtn.addEventListener('click',function(event){
    
// })

for (const customButton of buyNowCustomBtn) {
    customButton.addEventListener('click',function(event){
        // console.log(event.target)
        event.target.parentNode.parentNode.style.display = "none";
    });
    };

    const inputText = document.getElementById('input-text');
    inputText.addEventListener('keyup',function(event){
        // console.log(event.target.value);
        if(event.target.value == 'email'  ){
           document.getElementById('submit-button').removeAttribute('disabled');
        }
        else {
            document.getElementById('submit-button').setAttribute('disabled',true);
        }
    })
    inputText.addEventListener('change',function(event){
        // console.log(event.target.value);
        if(event.target.value == 'email'  ){
           document.getElementById('submit-button').removeAttribute('disabled');
        }
        else {
            document.getElementById('submit-button').setAttribute('disabled',true);
        }
    })