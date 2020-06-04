function getsource()
{	
    var cores=0;	var qestions=document.getElementsByClassName("question")	
    for(var i=0;i<qestions.length;i++)	
    {		var count=0;		var flag=1;		var answer=document.getElementsByName("answer"+(i+1));		
        for(var j=0;j<answer.length;j++)		
            {			
                if(answer[j].checked)			
                {				
                    if(answer[j].value*1<0)				
                    {					
                        flag=0;					
                        break;				
                    }				
                    else					
                    count+=answer[j].value*1;			
                }		
            }		
                if(flag==1)			cores+=count;	
    }

    alert("Your score is "+ cores);
}

function check( a)
{	
    var cores;
    var flag = 0;
    var answer=document.getElementsByName("answer"+(a));
    for(var j=0;j<answer.length;j++)		
    {			
                if(answer[j].checked)			
                {				
                    if(answer[j].value*1>0)				
                    {					
                        flag=1;	
                        break;							
                    }				
			
                }		
    }

    var ans=new Array("A","D","B","A","C","D","A","C","B","A");

    if(flag == 0){

        alert("Your answer is wrong");
        var second = confirm("Do you want to see correct answer?");
        if(second){
            alert("The correct answer is  "+ans[a-1]);
        }else{
        
        }

    }
    else{
        alert("Your answer is correct!");
    }
   

    
}
