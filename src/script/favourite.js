//import { resolve } from "url";

// //import { ReadStream } from "fs";
//  async function displayDetails()
// {
//     var response = await fetch('http://localhost:3000/favourites');
//      var results = await response.json();
//         //results array contain the result
// console.log(results);

// var container = document.getElementById('container-div');
// const h1 = container.appendChild(document.createElement('h1'));
// h1.innerText = 'hello world'
function displayDetails()
{
  
  // const response = await fetch('http://localhost:3000/favourites');
  // const results = await response.json();
  // console.log("U**********", results);  
  fetch('http://localhost:3000/favourites').then((response)=>{
     
     console.log('thisi s getting called');
   return response.json();    
        }).then(res => {
          res.forEach(results => {

            console.log('this is results', results);
          
              var container = document.getElementById('container-div');
              const h1 = container.appendChild(document.createElement('h1'));
              h1.innerText = 'hello world'
              var divCard = document.createElement('div');
              divCard.style.color="#000";
              divCard.style.textDecoration='none';
              divCard.className='card col  col-md-3 shadow-lg p-1 mb-3 bg-white rounded d-inline-flex';    // script for div with class card
              // divCard.className='card col col-md-4 shadow-lg p-1 mb-3 bg-white rounded d-inline-flex';
             divCard.style.width='20rem';
             if(container!=null){
              container.appendChild(divCard);
             }
              var imageUrl = 'https://image.tmdb.org/t/p/w500';
              var image = document.createElement('img');
              image.className='card-img-top img-responsive';      // script for image 
              image.src = imageUrl.concat(results['poster_path']);
              divCard.appendChild(image);
          
              var cardBody = document.createElement('div');
              cardBody.className = 'card-body';            //script for body div
              divCard.appendChild(cardBody);
          
              var cardTitle = document.createElement('h6');
              cardTitle.className = 'card-title alert alert-primary';   //script for body title
              if(results['title'].length>15)
                   cardTitle.textContent = results['title'].substr(0,15);
              else
              cardTitle.textContent = results['title'];
               console.log('49:title',results['title']);
              cardBody.appendChild(cardTitle);
          
              var cardOverview = document.createElement('p');
              cardOverview.className='card-text'; //script to add overview of movie
              if(results['overview'].length>100)
                   cardOverview.textContent = results['overview'].substr(0,100);
              else
                 cardOverview.textContent = results['overview'];
              cardBody.appendChild(cardOverview);
          
              var div = document.createElement('div');     //add readmore to text
              div.className = 'badge badge-primary';
              div.textContent = 'readmore';
              cardBody.append(div);
          
              var ul = document.createElement('ul');
              ul.className='list-group list-group-flush';  //script for ul
              divCard.appendChild(ul);
          
              var li = document.createElement('li');
              li.className='list-group-item bg-light';   
              var txt ='Release date : '   //script to add release date
              li.textContent = txt.concat(results['release_date']);
              ul.appendChild(li);
          
              var addfavDiv = document.createElement('div');
              addfavDiv.style.textAlign='center';
              
              addfavDiv.className = 'card-footer';  // script for div to insert add to favourites button
              divCard.appendChild(addfavDiv);
          
              var favButton = document.createElement('BUTTON');
              favButton.className = 'btn btn-danger';
              var text = document.createTextNode('Delete');
              favButton.appendChild(text);
              favButton.id = 'myBtn';
              addfavDiv.appendChild(favButton);
            }
          
          )
        })
  
  }
  
 
     
// displayDetails
