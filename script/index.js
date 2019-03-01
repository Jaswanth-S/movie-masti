async function trendingFun()
{
    var response={};
  //var divLength = document.getElementById('container-div');//check clicking count
    var response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=afe68439ec0fba4d7521cd1e54369d79');
    var results = await response.json();   //results array contain the result from tmdb
    
    // console.log(results['results'][0]);
    // console.log(results['results'][0]['title']);
    // console.log(results['results'][0]['poster_path']);
    var con = document.getElementById('container-div');
    if(con.children.length==0)
    {
    for(var i=0;i<12;i++)
    {
        var container = document.querySelector('.container-fluid');
        var divCard = document.createElement('a');
        divCard.style.color="#000";
        var movieId =results['results'][i]['id'];
        //divCard.href='/html/modal.html';
        divCard.href='';
        //divCard.onclick= await createModal.bind(null, movieId);
       // divCard.onclick = await fun(movieId,results);
       // divCard.href=await fun(movieId);
        divCard.style.textDecoration='none';
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

        // var addfavDiv = document.createElement('div');
        // addfavDiv.style.textAlign='center';
        // addfavDiv.className = 'card-footer';  // script for div to insert add to favourites button
        // divCard.appendChild(addfavDiv);

      //   var favButton = document.createElement('BUTTON');
      //   favButton.className = 'btn btn-warning';
      //   var text = document.createTextNode('Add to favourites');
      //   favButton.appendChild(text);
      //   favButton.id = 'myBtn';
      //     var movieId =results['results'][i]['id'];
      //   //var my = document.getElementById('myBtn');
      //  // console.log(results['results'][i]['id']);
      //   addfavDiv.appendChild(favButton);
        //favButton.onclick = await fun(movieId ,results);
    }  
  } 
  
  else if(con.children.length>0 && con.children.length<=8)
  {
    document.querySelector('.container-fluid').innerHTML="";
    trendingFun();
  }
}   

// async function createModal(id)
// {
//   var res ={};
//   console.log(id);
   
//   var res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=afe68439ec0fba4d7521cd1e54369d79&language=en-US`);
//   var rst = await  res.json();
//   console.log(rst);
// var m=` <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div class="modal-dialog" role="document">
//   <div class="modal-content">
//     <div class="modal-header">
//       <h5 class="modal-title" id="exampleModalLabel">${''+rst['title']}</h5>
//       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body" id="modal-body-id">
//       ${''+rst['overview']}
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//       <button type="button" class="btn btn-primary">Add to favourites</button>
//     </div>
//   </div>
// </div>
// </div>`;

// var mTitle = document.getElementById('exampleModalLabel');
//   mTitle.textContent = rst['title'];
//   var mOverview = document.getElementById('modal-body-id');
//   mOverview.textContent=rst['overview'];
  
  // var divMod = document.createElement('div');
  // divMod.className='modal fade';
  // var container = document.querySelector('.container-fluid');
  // container.appendChild(divMod);


  //var res = await fetch('https://api.themoviedb.org/3/movie/490132?api_key=afe68439ec0fba4d7521cd1e54369d79&language=en-US')
//}


// async function fun(id , result)
// {
//   console.log(id);
//   console.log(result);
// }
 
// async function fun(id)
// {
//   var res ={};

//   var starttxt='https://api.themoviedb.org/3/movie/';
//   var starttxt = starttxt.concat(id);
//   var divMod = document.createElement('div');
//    var m = document.getElementById('exampleModal');
   
//   var endtxt ='?api_key=afe68439ec0fba4d7521cd1e54369d79&language=en-US'; 
//   var endtxt = starttxt.concat(endtxt);
//   var res = await fetch(endtxt);
//   var rst = await  res.json();
  
//   //var res = await fetch('https://api.themoviedb.org/3/movie/490132?api_key=afe68439ec0fba4d7521cd1e54369d79&language=en-US')
// }
async function searchFun()
{   
    var response={};
    var divLength = document.getElementById('container-div');//check clicking count
    var search = document.getElementById('search-id');
    var searchText = search.value;
        var starttxt=`https://api.themoviedb.org/3/search/movie?api_key=afe68439ec0fba4d7521cd1e54369d79&language=en-US&query=${searchText}&page=${1}&include_adult=false`;
        // var starttxt = starttxt.concat(searchText);
        // var endtxt = starttxt.concat(endtxt);
        var response = await fetch(starttxt);
      // var response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=afe68439ec0fba4d7521cd1e54369d79&language=en-US&query=spider&page=1&include_adult=false');
        var results = await response.json();   //results array contain the result from tmdb

    // console.log(results['results'][0]);
    // console.log(results['results'][0]['title']);
    // console.log(results['results'][0]['poster_path']);
    if(divLength.children.length===0)
    {
    for(var i=0;i<8;i++)
    {
        var container = document.querySelector('.container-fluid');
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

        // var addfavDiv = document.createElement('div');
        // addfavDiv.style.textAlign='center';
        // addfavDiv.className = 'card-footer';  // script for div to insert add to favourites button
        // divCard.appendChild(addfavDiv);

        // var favButton = document.createElement('BUTTON');
        // favButton.className = 'btn btn-warning';
        // var text = document.createTextNode('Add to favourites');
        // favButton.appendChild(text);
        // favButton.id = 'myBtn';
        // addfavDiv.appendChild(favButton);
        // console.log(results['results'][i]['id']);

    }
  }
  else if(divLength.children.length>0&& divLength.children.length<=12)
  {
    document.querySelector('.container-fluid').innerHTML="";
    searchFun();
  }
}  

