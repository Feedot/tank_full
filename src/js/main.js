window.onload=function () {
    var numbers = document.getElementById('numbers').getElementsByTagName('li'),
        paragrafs = document.getElementsByClassName('paragraf'),
        number = 1,
        int = setInterval(function () {
        anime(number)
        number++
        if(number == 4){number = 0;}
    }, 2500)
    for(i=0;i<numbers.length;i++){
      numbers[i].onclick = function () {
          clearInterval(int);
          var self = paragrafs[+this.innerHTML-1],
              back = this;
          for(j=0;j<numbers.length;j++){
              paragrafs[j].style.opacity = 0;
              numbers[j].style.backgroundColor = 'transparent';
          }
          setTimeout(function () {
              for(c=0;c<paragrafs.length;c++){
                paragrafs[c].setAttribute('class','paragraf');
              }
              self.setAttribute('class','paragraf active');
              self.style.opacity = 0;
              setTimeout(function () {
                  self.style.opacity = 1;
              },250)
          },500)
          back.style.backgroundColor = '#64a4d7';
          number = +back.innerHTML;
              int = setInterval(function () {
                  anime(number)
                  number++
                  if(number == 4){number = 0;}
              }, 2500)
      }
    }
    function anime(number) {
        var self = paragrafs[+number],
        back = numbers[+number];
        for(j=0;j<numbers.length;j++){
            paragrafs[j].style.opacity = 0;
            numbers[j].style.backgroundColor = 'transparent';
        }
        setTimeout(function () {
            for(c=0;c<paragrafs.length;c++){
                paragrafs[c].setAttribute('class','paragraf');
            }
            self.setAttribute('class','paragraf active');
            self.style.opacity = 0;
            setTimeout(function () {
                self.style.opacity = 1;
            },250)
        },500)
        back.style.backgroundColor = '#64a4d7';
    }
    var cloudOne = document.getElementsByClassName('one')[0],
        cloudeThree = document.getElementsByClassName('three')[0],
        cloudeTwo = document.getElementsByClassName('two')[0],
        cloudeFour = document.getElementsByClassName('four')[0];
    setInterval(function () {
        cloudOne.style.left = '80px';
        cloudOne.style.top = '50px';
        cloudeThree.style.right = '90%';
        cloudeThree.style.top = '20%';
        cloudeTwo.style.bottom = '50%';
        cloudeTwo.style.left ='50%';
        cloudeFour.style.right = '80%'
        cloudeFour.style.bottom = '50%';
    },3000)
    setInterval(function () {
        cloudOne.style.left = '30%';
        cloudOne.style.top = '80px';
        cloudeThree.style.right = '100px'
        cloudeThree.style.top = '50%'
        cloudeTwo.style.bottom = '25%';
        cloudeTwo.style.left ='10%';
        cloudeFour.style.right = '50%'
        cloudeFour.style.bottom = '30%';
    },6000)
    setInterval(function () {
        cloudOne.style.left = '120px';
        cloudOne.style.top = '150px';
        cloudeThree.style.right = '160px'
        cloudeThree.style.top = '140px'
        cloudeTwo.style.bottom = '310px';
        cloudeTwo.style.left ='120px';
        cloudeFour.style.right = '90px'
        cloudeFour.style.bottom = '320px';
    },9000);
    var button = document.getElementById("butConnect"),
        button2 = document.getElementById('butHome');
       function clickButton(button) {
           button.onmousedown = function () {
               button.style.boxShadow = 'inset 0px 0px 8px 0px black '
           }
           button.onmouseup = function () {
               button.style.boxShadow = '0px 0px 4px 0px black '
           }
       }
       clickButton(button);
       clickButton(button2);
        var after = document.getElementsByClassName('onclick')[0].getElementsByTagName('a');
        for (var z = 0;z<after.length;z++){
            after[z].onclick = function () {
                if(document.getElementsByClassName("header_two after")[0]){
                        document.getElementsByClassName("header_two after")[0].setAttribute('class',"header_two before")
                }
            }
        }
       document.getElementById('lines_button').onclick = function () {
           if((document.getElementsByClassName("header_two before")[0])){
               document.getElementsByClassName("header_two before")[0].setAttribute('class',"header_two after");
           }else {
               document.getElementsByClassName("header_two after")[0].setAttribute('class',"header_two before");
           };
       }

}