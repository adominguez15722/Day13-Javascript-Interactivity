// console.log('hello world');

let message = document.querySelector('#message')


function addMovie(event)  {
    
    event.preventDefault()
    const inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    
    movie.appendChild(movieTitle);

    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn);
    
    
    document.querySelector('ul').appendChild(movie);
    
    
    // function clear()    {
        //     inputField.value = ''        
        // }
        // document.querySelector('button').addEventListener('submit', clear)
    }
    
    document.querySelector('form').addEventListener('submit', addMovie);
    
function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted!'
}
    
function crossOffMovie(event)    {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked'))    {
        message.textContent = 'Movie watched'
    }   else{
        message.textContent = 'Movie added back!'
    }
}



