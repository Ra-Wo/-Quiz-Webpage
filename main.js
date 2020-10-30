var Q = document.getElementById('Q1'),
    A1 = document.getElementById('answer1'),
    A2 = document.getElementById('answer2'),
    A3 = document.getElementById('answer3'),
    points = 0; 
    
    
/* the start ==> Question # 1 */

window.onload = function() {

    setTimeout(function() {
        if (parseInt(points) == 0) {

            Q.textContent = 'Which property is used to change font color? ';
            A1.textContent = 'color:';
            A2.textContent = 'font-size:';
            A3.textContent = 'transform:';
        };

    }, 1000);
    

};


/* the buttom to change style if the answer is wrong */
    
function wrongAnswer(WrongButtom) {
   
    var backgro = WrongButtom,
        text = WrongButtom
    ;

    setTimeout(function(){
        backgro.style.background = 'white';
        text.style.color = 'black';
     
    }, 2000);
 
    
    backgro.style.background = '#FF4266';
    text.style.color = 'white';
     
    };
    
    
/* if the answer is correct */
    
function trueAnswer(rightButtom) {
    setTimeout(function() {
        rightButtom.style.background = '#6AFF61';
        rightButtom.style.color = 'white';
    }, 0);
    setTimeout(function() {
        rightButtom.style.background = 'white';
        rightButtom.style.color = 'black';
    }, 800);
};
    
    

function qAnswer(thN) {
     
   /* Question # 2 */
     
  function question1() {
       if (A3.textContent == 'transform:' && thN == 1) {
            trueAnswer(A1);
            setTimeout(function() {
                
               Q.textContent = 'Which property is used to change the font size?';
               A1.textContent = 'opacity:';
               A2.textContent = 'font-size:';
               A3.textContent = 'box-shadow:';
               
               points++;
            }, 800);
            
        } else if (A3.textContent == 'transform:' && thN == 3) {
            wrongAnswer(A3);
            points--;
        } else if (A3.textContent == 'transform:' && thN == 2) {
            wrongAnswer(A2);
            points--;
        };
  }; 
  
  question1();
        
   /* Question # 3 */
        if (A1.textContent == 'opacity:' && thN == 2) {
            
            trueAnswer(A2);
            
            setTimeout(function() {
                
                Q.textContent = 'Which property is used to change the background color? ';
                A1.textContent = 'background:';
                A2.textContent = 'width:';
                A3.textContent = 'height:';
      
                
            }, 800);
           points++;
           
           
        } else if (A1.textContent == 'opacity:' && thN == 3) {
            wrongAnswer(A3);
            points--;
            
        } else if (A1.textContent == 'opacity:' && thN == 1) {
            wrongAnswer(A1);
            points--;
        };
         
  /*  Question #3  */
        if (A1.textContent == 'background:' && thN == 1){
            trueAnswer(A1);
        
            setTimeout(function() {
                
              
        
                
            }, 800);
            points++;
            
            
            
        setTimeout(function(){
            
            if (parseInt(points) > 1) {
                document.getElementById('results').style.visibility = 'visible';
                
                document.getElementById('res').textContent += points;
            } else {
                document.getElementById('results2').style.visibility = 'visible';
                
                document.getElementById('res2').textContent += points;
            }
            
            
        }, 800 );
            
            
            
        } else if (A1.textContent == 'background:' && thN == 3) {
            wrongAnswer(A3);
            points--;
            
        } else if (A1.textContent == 'background:' && thN == 2) {
            wrongAnswer(A2);
            points--;
        };
         
            
         
            
            
            
         
    return points;
    };
    
    
    
setInterval( function(){
    console.log(points); }, 1000);



function activeDarkMode(){
     
     document.getElementById('icon-mode').classList.toggle("do-dark-mode");
     
     var darkClass = document.getElementsByClassName('doDark');
     var i; 
     for (i=0; i < darkClass.length; i++ ) {
         
         darkClass[i].classList.toggle('dark')
     }
     
        
        

}

