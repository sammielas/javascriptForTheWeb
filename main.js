const articles = document.getElementsByTagName('article');
const sidebar = document.querySelector('.sidebar')

const header = document.getElementById('page-header');
console.log(header)

//modify DOM
header.innerHTML = '<h2>Modify The DOM</h2>';
header.classList.add('text-right');

sidebar.classList.remove('bgPrim');
sidebar.classList.add('bgSec')

let newArticle = document.createElement('article');
console.log(newArticle)