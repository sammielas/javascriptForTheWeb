const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');
const commentform = document.getElementById('comment-form')

const hobbiesResult  = document.getElementById('hobbies-result');
const transportResult  = document.getElementById('transport-result');
const musicResult  = document.getElementById('music-result');

/* Checkbox listeners */
document.getElementById('sports-checkbox').addEventListener('change',(e)=>{
  if(e.target.checked){
    hobbiesResult.children[0].classList.remove('text-sec');
  }else{
    hobbiesResult.children[0].classList.add('text-sec')
  }
})
document.getElementById('video-checkbox').addEventListener('change',(e)=>{
  if(e.target.checked){
    hobbiesResult.children[1].classList.remove('text-sec');
  }else{
    hobbiesResult.children[1].classList.add('text-sec')
  }
})
document.getElementById('music-checkbox').addEventListener('change',(e)=>{
  if(e.target.checked){
    hobbiesResult.children[2].classList.remove('text-sec');
  }else{
    hobbiesResult.children[2].classList.add('text-sec')
  }
})

const radioButtons = document.getElementsByName('transport-method') ;
const musicDropDown= document.getElementById('music-preference')
musicResult.textContent =  musicDropDown.value;


submitButton.addEventListener('click', (e)=>{
  e.preventDefault();
  sidebar.textContent = 'Hello, ' + firstNameInput.value + ' ' + lastNameInput.value;
  commentform.reset();
});

/* Radio button Event listenes */

for(let i=0;i<radioButtons.length;i++){
  radioButtons[i].addEventListener('change',($event)=>{
    transportResult.textContent =$event.target.value;
  })
}

/* DropDown music preference */
musicDropDown.addEventListener('change',(e)=>{
  musicResult.textContent= e.target.value;
})