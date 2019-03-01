async function searchFun()
{   
    var response={};
    var divLength = document.getElementById('container-div');//check clicking count
    var temp = document.createElement('p');
    temp.textContent = divLength.childElementCount;
    var search = document.getElementById('search-id');
    var searchText = search.textContent;
      if(temp.textContent==0)
      {
    
        var response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=afe68439ec0fba4d7521cd1e54369d79&language=en-US&query=spider&page=1&include_adult=false');
        var results = await response.json();   //results array contain the result from tmdb
    
    // console.log(results['results'][0]);
    // console.log(results['results'][0]['title']);
    // console.log(results['results'][0]['poster_path']);
    
    for(var i=0;i<12;i++)
    {
        var container = document.querySelector('.container');
        var divCard = document.createElement('div');
        divCard.style.color="#000";
        divCard.className='card col  col-md-3 shadow-lg p-1 mb-3 bg-white rounded d-inline-flex';    // script for div with class card
        // divCard.className='card col col-md-4 shadow-lg p-1 mb-3 bg-white rounded d-inline-flex';
        divCard.style.width='20rem';
        container.appendChild(divCard);

        var imageUrl = 'https://image.tmdb.org/t/p/w500';
        var image = document.createElement('img');
        image.className='card-img-top img-responsive';         // script for image 
        image.src = imageUrl.concat(results['results'][i]['poster_path']);
        divCard.appendChild(image);

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';            //script for body div
        divCard.appendChild(cardBody);

        var cardTitle = document.createElement('h6');
        cardTitle.className = 'card-title alert alert-primary';   //script for body title
        if(results['results'][i]['title'].length>15)
             cardTitle.textContent = results['results'][i]['title'].substr(0,15);
        else
        cardTitle.textContent = results['results'][i]['title'];
    
        cardBody.appendChild(cardTitle);

        var cardOverview = document.createElement('p');
        cardOverview.className='card-text'; //script to add overview of movie
        if(results['results'][i]['overview'].length>100)
             cardOverview.textContent = results['results'][i]['overview'].substr(0,100);
        else
           cardOverview.textContent = results['results'][i]['overview'];
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
        li.textContent = txt.concat(results['results'][i]['release_date']);
        ul.appendChild(li);

        var addfavDiv = document.createElement('div');
        addfavDiv.style.textAlign='center';
        addfavDiv.className = 'card-footer';  // script for div to insert add to favourites button
        divCard.appendChild(addfavDiv);

        var favButton = document.createElement('BUTTON');
        favButton.className = 'btn btn-warning';
        var text = document.createTextNode('Add to favourites');
        favButton.appendChild(text);
        favButton.id = 'myBtn';
        addfavDiv.appendChild(favButton);
    }
    
}
var temp = document.createElement('p');
    temp.textContent = divLength.childElementCount;
}  