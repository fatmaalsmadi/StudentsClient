let input = document.getElementById('input');
//let button = document.getElementById('button').addEventListener('click',get)
let table = document.getElementById('table');


let button = document.getElementById('button').addEventListener('click',get);
 function get(){
 
    // const myheaders = new Headers();
let num = input.value ;
     fetch('http://localhost:4000/student?page=' + num, {
           method: 'GET',
            // headers: myheaders,
         })
         .then(Response => Response.json())
         .then(data => {
            console.log(data , data[1].id);
         for(i = 0 ; i < data.length ; i++){
          table.innerHTML += ' <tr><th>' + data[i].id+' </th> <th> ' + data[i].first_name +'</th> <th> ' + data[i].last_name+'</th> <th> ' + data[i].grade+'</th></tr>';
        
          
        

         }




         })
        }