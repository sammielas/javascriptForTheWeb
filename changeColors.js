// Get access to DOM Elements
const header = document.querySelector('header');
const blueButton= document.getElementById('color-button-blue');
const brownButton= document.getElementById('color-button-brown');
const greenButton= document.getElementById('color-button-green');
const noneButton= document.getElementById('color-button-none');

const addPostButton = document.getElementById('add-post');
const articleSection =document.querySelector('section');

const removePostButton= document.getElementById('remove-post');


//Click event listeners
blueButton.addEventListener('click',()=>{
  document.body.classList.remove('brown-background','green-background');
  document.body.classList.add('blue-background','text-write')
})

brownButton.addEventListener('click',()=>{
  document.body.classList.remove('blue-background','green-background');
  document.body.classList.add('brown-background','text-write')
})

greenButton.addEventListener('click',()=>{
  document.body.classList.remove('brown-background','blue-background');
  document.body.classList.add('green-background','text-write')
})
noneButton.addEventListener('click',()=>{
  document.body.classList.remove('brown-background','green-background','blue-background','text-write');
})

addPostButton.addEventListener('click',()=>{
const newPost = createNewPost();
articleSection.appendChild(newPost);
})

removePostButton.addEventListener('click',()=>{
  const articleCount = articleSection.childElementCount;
  if(articleCount > 1){
    articleSection.removeChild(articleSection.children[articleCount - 1 ]);
  }
})


//Page functions
function createNewPost(){
  let newArticle = document.createElement('article');
  let newHeading = document.createElement('h5');
  let newParagraph = document.createElement('p');

  newHeading.textContent = "Another blogpost";
  newParagraph.textContent= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae sit recusandae non culpa mollitia ducimus aliquam maiores maxime reiciendis atque odit, omnis officiis porro, impedit fuga? Eaque cupiditate esse repudiandae.";
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);
  
  newArticle.classList.add('list-group-item');
  return newArticle;
}