$("#btn").on('click',function(){
    
         $("#menu").toggle();
         for(var i=1;i<($("#menu div").length)+1;i++){
             console.log(i)
              $("#menu div:nth-child("+i+")").toggle(i*80);
         } 
        
    })

    console.log('修改内容')
    console.log('这是加入的内容')
    console.log('分支内容')

  
 