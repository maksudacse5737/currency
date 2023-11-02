var input,a;
const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Please enter a number: ', input=>{
breakdown(input);
readline.close();
});

function breakdown(input){
    var mod50t=input%50,mod10=input%10,j;
    switch (input>10 && input<=19){
        case true:  
            console.log(" return 1 note of 10 taka and");
            switch( mod10==1||mod10==2||mod10==3||mod10==4||mod10==5||mod10==6||mod10==7||mod10==8||mod10==9){
                case true: breakdown(mod10);
                break;
            }
    }
    
    switch (input>20 && input<=49){
        case true:
            var mod20=input%20;
            switch(mod20==0){
                case true:
                console.log(" return "+Math.trunc(input/20)+" note of 20 taka");
            }
            switch( mod20==1||mod20==2||mod20==3||mod20==4||mod20==5||mod20==6||mod20==7||mod20==8||mod20==9||mod20==10||mod20==20){
                case true: 
                console.log(" return "+Math.trunc(input/20)+" note of 20 taka and ");
                breakdown(mod20);
                break;
            }
            switch( mod20>10 && mod20<=19){
                case true: 
                console.log(" return "+Math.trunc(input/20)+" note of 20 taka and ");
                breakdown(mod20);
                break;
            }
}
switch (input>50 && input<=99){
    case true:
        var mod50=input%50;
        console.log(" return 1 note of 50 taka and ");
        switch( mod50==1||mod50==2||mod50==3||mod50==4||mod50==5||mod50==6||mod50==7||mod50==8||mod50==9||mod50==10||mod50==20){
            case true: breakdown(mod50);
            break;
        }
        switch(mod50>10 && mod50<=19){
            case true: breakdown(mod50);
            break;
        }
        switch(mod50>20 && mod50<=49){
            case true: breakdown(mod50);
            break;
        }
    }
    switch (input>100 && input<=199){
        case true:
            var mod100=input%100;
            console.log(" return 1 note of 100 taka and ");
            switch( mod100==1||mod100==2||mod100==3||mod100==4||mod100==5||mod100==6||mod100==7||mod100==8||mod100==9||mod100==10||mod100==20||mod100==30||mod100==40){
                case true: breakdown(mod100);
                break;
            }
            switch(mod100>10 && mod100<=19){
                case true: breakdown(mod100);
                break;
            }
            switch(mod100>20 && mod100<=49){
                case true: breakdown(mod100);
                break;
            }
            switch(mod100==50){
                case true: breakdown(mod100);
                break;
            }
            switch(mod100>50 && mod100<=99){
                case true: breakdown(mod100);
                break;
            }
        }
    switch (input>200 && input<=499){
        case true:
            var mod200=input%200;
            
            if(mod200==0){
                console.log(" return "+Math.trunc(input/200)+" note of 200 taka");
            }
            else{
                console.log(" return "+Math.trunc(input/200)+" note of 200 taka and ");
                switch( mod200==1||mod200==2||mod200==3||mod200==4||mod200==5||mod200==6||mod200==7||mod200==8||mod200==9||mod200==10||mod200==20||mod200==30||mod200==40){
                    case true: breakdown(mod200);
                    break;
                }
                switch(mod200>10 && mod200<=19){
                    case true: breakdown(mod200);
                    break;
                }
                switch(mod200>20 && mod200<=49){
                    case true: breakdown(mod200);
                    break;
                }
                switch(mod200==50){
                    case true: breakdown(mod200);
                    break;
                }
                switch(mod200>50 && mod200<=99){
                    case true: breakdown(mod200);
                    break;
                }
                switch(mod200==100){
                    case true: breakdown(mod200);
                    break;
                }
                switch(mod200>100 && mod200<=199){
                    case true: breakdown(mod200);
                    break;
                }
            }     
        }
        switch (input>500 && input<=999){
            case true:
                var mod500=input%500;
                console.log(" return "+Math.trunc(input/500)+" note of 500 taka and ");
                switch( mod500==1||mod500==2||mod500==3||mod500==4||mod500==5||mod500==6||mod500==7||mod500==8||mod500==9||mod500==10||mod500==20||mod500==30||mod500==40){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500>10 && mod500<=19){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500>20 && mod500<=49){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500==50){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500>50 && mod500<=99){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500==100){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500>100 && mod500<=199){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500==200){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500==300){
                    case true: breakdown(mod500);
                    break;
                }
                switch(mod500>200 && mod500<=499 && mod500!=300){
                    case true: breakdown(mod500);
                    break;
                }
            }
            switch (input>1000){
                case true:
                    var mod1000=input%1000;
                    console.log(" return "+Math.trunc(input/1000)+" note of 1000 taka and ");
                    switch( mod1000==1||mod1000==2||mod1000==3||mod1000==4||mod1000==5||mod1000==6||mod1000==7||mod1000==8||mod1000==9||mod1000==10||mod1000==20||mod1000==30||mod1000==40){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000>10 && mod1000<=19){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000>20 && mod1000<=49){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000==50){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000>50 && mod1000<=99){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000==100){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000>100 && mod1000<=199){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000==200){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000>200 && mod1000<=499){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000==500){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000>500 && mod1000<=999){
                        case true: breakdown(mod1000);
                        break;
                    }
                    switch(mod1000>1000){
                        case true: breakdown(mod1000);
                        break;
                    }
                }
    switch(input==1||input==2||input==5||input==10||input==20||input==50||input==100||input==200||input==500||input==1000){
        case true: 
            console.log(" return 1 note of "+input+" taka");
        break;
    }
    switch(input==3||input==6){
        case true: console.log(" return 1 note of "+(input-1)+" taka and 1 note of 1 taka");
        break;
    }
    switch(input==4){
        case true: console.log(" return 2 note of 2 taka");
        break;
    }
    switch(input==7){
        case true: console.log(" return 1 note of 5 taka and 1 note of 2 taka");
        break;
    }
    switch(input==8){
        case true: console.log(" return 1 note of 5 taka and 1 note of 2 taka and 1 note of 1 taka");
        break;
    }
    switch(input==9){
        case true: console.log(" return 1 note of 5 taka and 2 note of 2 taka");
        break;
    }
}
