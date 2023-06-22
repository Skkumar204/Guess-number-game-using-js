

let n = Math.ceil(Math.random()*20);

  
let score = 20;

let cur = 0;


document.querySelector('.check').addEventListener('click',function(){
    
    const num = Number(document.querySelector('.guess').value);

        if(!num)
        {
            document.querySelector('.message').textContent='Enter the valid Number'
        }
        else if(n==num)
        { 
            document.querySelector('.message').textContent='Yeaah correct Answer!!!'
            score++;
            document.querySelector('.score').textContent=score;
            document.querySelector('body').style.backgroundColor='green';
            document.querySelector('.number').style.width='30rem'
            document.querySelector('.number').textContent=n;

            if(cur<score)
            {
                cur=score;
                document.querySelector('.highscore').textContent=cur;
            }
        }
        else if(score>1)
        {

            if(num>n)
            {
                document.querySelector('.message').textContent='Too long '
                score--;
                document.querySelector('.score').textContent=score;
            }
            else if(num<n)
            {
                document.querySelector('.message').textContent='Too small'
                score--;
                document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.message').textContent='Wrong Number!'

                score--;
                document.querySelector('.score').textContent=score;
            }
        }
        else if(score<=0)
        {
            console.log('hii');
        }
        else{
            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector('.message').textContent='You lost!!!'
        }

})

document.querySelector('.btn').addEventListener('click',()=>{
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor=('black');
   
    n = Math.ceil(Math.random()*20);
    document.querySelector('.number').textContent='?'

    document.querySelector('.guess').value=''

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'
})