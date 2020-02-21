var color="gelb";
var Element=1;

var mousex=0;
var mousey=0;
var verlauf=[];
var templist=[]
var img
// Gelb
var gelbH1=[];
var gelbH2=[];
var gelbSchirm=[];
var gelbLift3=[];
var gelbLift6=[];
var gelbLift8=[];
var gelbLift10=[];
var gelbLift12=[];
var gelbLift14=[];
//Rot
var rotH1=[];
var rotH2=[];
var rotSchirm=[];
var rotLift3=[];
var rotLift6=[];
var rotLift8=[];
var rotLift10=[];
var rotLift12=[];
var rotLift14=[];
//Grün
var grünH1=[];
var grünH2=[];
var grünSchirm=[];
var grünLift3=[];
var grünLift6=[];
var grünLift8=[];
var grünLift10=[];
var grünLift12=[];
var grünLift14=[];
//Blau
var blauH1=[];
var blauH2=[];
var blauSchirm=[];
var blauLift3=[];
var blauLift6=[];
var blauLift8=[];
var blauLift10=[];
var blauLift12=[];
var blauLift14=[];

function undo(){
  if (verlauf[verlauf.length -1]=="gelbH1"){gelbH1.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="gelbH2"){gelbH2.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="gelbSchirm"){gelbSchirm.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="gelbLift3"){gelbLift3.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="gelbLift6"){gelbLift6.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="gelbLift8"){gelbLift8.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="gelbLift10"){gelbLift10.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="gelbLift12"){gelbLift12.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="gelbLift14"){gelbLift14.splice(-1,1);verlauf.splice(-1,1);}


  if (verlauf[verlauf.length -1]=="rotH1"){rotH1.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="rotH2"){rotH2.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="rotSchirm"){rotSchirm.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="rotLift3"){rotLift3.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="rotLift6"){rotLift6.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="rotLift8"){rotLift8.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="rotLift10"){rotLift10.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="rotLift12"){rotLift12.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="rotLift14"){rotLift14.splice(-1,1);verlauf.splice(-1,1);}


  if (verlauf[verlauf.length -1]=="blauH1"){blauH1.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="blauH2"){blauH2.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="blauSchirm"){blauSchirm.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="blauLift3"){blauLift3.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="blauLift6"){blauLift6.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="blauLift8"){blauLift8.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="blauLift10"){blauLift10.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="blauLift12"){blauLift12.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="blauLift14"){blauLift14.splice(-1,1);verlauf.splice(-1,1);}


  if (verlauf[verlauf.length -1]=="grünH1"){grünH1.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="grünH2"){grünH2.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="grünSchirm"){grünSchirm.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="grünLift3"){grünLift3.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="grünLift6"){grünLift6.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="grünLift8"){grünLift8.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="grünLift10"){grünLift10.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="grünLift12"){grünLift12.splice(-1,1);verlauf.splice(-1,1);}
  if (verlauf[verlauf.length -1]=="grünLift14"){grünLift14.splice(-1,1);verlauf.splice(-1,1);}
}
window.addEventListener('keydown', function (e) {
  if (e.key=="d"){undo();}
});
window.onload = function(){

    //canvas init
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.addEventListener("click", mouseClick, false);
    canvas.addEventListener("mousemove", mouseMove, false);
    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //snowflake particles
    var mp = 200; //max particles
    var particles = [];
    for(var i = 0; i < mp; i++)
    {
        particles.push({
            x: Math.random()*W, //x-coordinate
            y: Math.random()*H, //y-coordinate
            r: Math.random()*4+1, //radius
            d: Math.random()*mp //density
        })
    }

    //Lets draw the flakes
    function draw()
    {
        ctx.clearRect(0, 0, W, H);
        //////////////////////////////////////////////////////////////////////////////////////////
        // GELB
        //////////////////////////////////////////////////////////////////////////////////////////
        img = document.getElementById("gelbHütte1");
        for (var i in gelbH1) {
            ctx.drawImage(img, gelbH1[i][0], gelbH1[i][1],img.width/2 ,img.height/2 );
        }
        img = document.getElementById("gelbHütte2");
        for (var i in gelbH2) {
            ctx.drawImage(img, gelbH2[i][0], gelbH2[i][1],img.width/2 ,img.height/2 );
        }
        img = document.getElementById("gelbSchirm");
        for (var i in gelbSchirm) {
            ctx.drawImage(img, gelbSchirm[i][0], gelbSchirm[i][1],img.width/2 ,img.height/2 );
        }
        var img2 = document.getElementById("gelbLift3");
        for (var i in gelbLift3) {
            img = document.getElementById("gelbLift2");
            ctx.drawImage(img, gelbLift3[i][2],gelbLift3[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(gelbLift3[i][2]+8-gelbLift3[i][0]-8);
            //y achse
            var vektor2=(gelbLift3[i][3]+10-gelbLift3[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*2;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;

            if (gelbLift3[i][5]){
                ctx.drawImage(img2,gelbLift3[i][2]-vektor1* gelbLift3[i][4],gelbLift3[i][3]+8-vektor2*gelbLift3[i][4],img2.width/2 ,img2.height/2);
                if (gelbLift3[i][4]>=einheitsfaktor){gelbLift3[i][5]=false}
                else{gelbLift3[i][4] +=1;}
            }
            else{
                ctx.drawImage(img2,gelbLift3[i][2]-vektor1* gelbLift3[i][4],gelbLift3[i][3]+8-vektor2*gelbLift3[i][4],img2.width/2 ,img2.height/2);
                if (gelbLift3[i][4]<=0){gelbLift3[i][5]=true}
                else{gelbLift3[i][4] -=1;}
            }

            if (gelbLift3[i][5]){
                ctx.drawImage(img2,gelbLift3[i][2]+12-vektor1* (einheitsfaktor-gelbLift3[i][4]),gelbLift3[i][3]+8-vektor2*(einheitsfaktor-gelbLift3[i][4]),img2.width/2 ,img2.height/2);
                if (gelbLift3[i][4]>=einheitsfaktor){gelbLift3[i][5]=false}
                else{gelbLift3[i][4] +=1;}
            }
            else{
                ctx.drawImage(img2,gelbLift3[i][2]+12-vektor1* (einheitsfaktor-gelbLift3[i][4]),gelbLift3[i][3]+8-vektor2*(einheitsfaktor-gelbLift3[i][4]),img2.width/2 ,img2.height/2);
                if (gelbLift3[i][4]<=0){gelbLift3[i][5]=true}
                else{gelbLift3[i][4] -=1;}
            }

            img = document.getElementById("gelbLift1");
            ctx.drawImage(img, gelbLift3[i][0],gelbLift3[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";
            ctx.beginPath();
            ctx.moveTo(gelbLift3[i][2]+8,gelbLift3[i][3]+10);
            ctx.lineTo(gelbLift3[i][0]+8,gelbLift3[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(gelbLift3[i][2]+19,gelbLift3[i][3]+10);
            ctx.lineTo(gelbLift3[i][0]+19,gelbLift3[i][1]+0);
            ctx.stroke();

            //console.log(gelbLift3[i][4]);
        }
        var img2 = document.getElementById("gelbLift6");
        for (var i in gelbLift6) {
            img = document.getElementById("gelbLift5");
            ctx.drawImage(img, gelbLift6[i][2],gelbLift6[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(gelbLift6[i][2]+8-gelbLift6[i][0]-12);
            //y achse
            var vektor2=(gelbLift6[i][3]+10-gelbLift6[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*2;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/200; test++)
            {

                var delta_X=gelbLift6[i][4]*vektor1+test*vektor1*200;
                var delta_Y=gelbLift6[i][4]*vektor2+test*vektor2*200;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,gelbLift6[i][2]+7-delta_X,gelbLift6[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift6[i][2]+17-vektor1*einheitsfaktor+delta_X,gelbLift6[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,gelbLift6[i][2]+7-delta_X+vektor1*einheitsfaktor,gelbLift6[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift6[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,gelbLift6[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (gelbLift6[i][4]>=einheitsfaktor){gelbLift6[i][4]=0}
            else{gelbLift6[i][4] +=1;}


            img = document.getElementById("gelbLift4");
            ctx.drawImage(img, gelbLift6[i][0],gelbLift6[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(gelbLift6[i][2]+10,gelbLift6[i][3]+8);
            ctx.lineTo(gelbLift6[i][0]+16,gelbLift6[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(gelbLift6[i][2]+20,gelbLift6[i][3]+8);
            ctx.lineTo(gelbLift6[i][0]+26,gelbLift6[i][1]+0);
            ctx.stroke();

            //console.log(gelbLift6[i][4]);
        }
        var img2 = document.getElementById("gelbLift7");
        for (var i in gelbLift8) {
            img = document.getElementById("gelbLift5");
            ctx.drawImage(img, gelbLift8[i][2],gelbLift8[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(gelbLift8[i][2]+8-gelbLift8[i][0]-15);
            //y achse
            var vektor2=(gelbLift8[i][3]+10-gelbLift8[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*5;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/150; test++)
            {

                var delta_X=gelbLift8[i][4]*vektor1+test*vektor1*150;
                var delta_Y=gelbLift8[i][4]*vektor2+test*vektor2*150;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,gelbLift8[i][2]+7-delta_X,gelbLift8[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift8[i][2]+17-vektor1*einheitsfaktor+delta_X,gelbLift8[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,gelbLift8[i][2]+7-delta_X+vektor1*einheitsfaktor,gelbLift8[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift8[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,gelbLift8[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (gelbLift8[i][4]>=einheitsfaktor){gelbLift8[i][4]=0}
            else{gelbLift8[i][4] +=1;}


            img = document.getElementById("gelbLift4");
            ctx.drawImage(img, gelbLift8[i][0],gelbLift8[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(gelbLift8[i][2]+10,gelbLift8[i][3]+8);
            ctx.lineTo(gelbLift8[i][0]+16,gelbLift8[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(gelbLift8[i][2]+20,gelbLift8[i][3]+8);
            ctx.lineTo(gelbLift8[i][0]+26,gelbLift8[i][1]+0);
            ctx.stroke();

            //console.log(gelbLift8[i][4]);
        }
        var img2 = document.getElementById("gelbLift8");
        for (var i in gelbLift10) {
            img = document.getElementById("gelbLift5");
            ctx.drawImage(img, gelbLift10[i][2],gelbLift10[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(gelbLift10[i][2]+8-gelbLift10[i][0]-15);
            //y achse
            var vektor2=(gelbLift10[i][3]+10-gelbLift10[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*10;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/300; test++)
            {

                var delta_X=gelbLift10[i][4]*vektor1+test*vektor1*300;
                var delta_Y=gelbLift10[i][4]*vektor2+test*vektor2*300;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,gelbLift10[i][2]+7-delta_X,gelbLift10[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift10[i][2]+17-vektor1*einheitsfaktor+delta_X,gelbLift10[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,gelbLift10[i][2]+7-delta_X+vektor1*einheitsfaktor,gelbLift10[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift10[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,gelbLift10[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (gelbLift10[i][4]>=einheitsfaktor){gelbLift10[i][4]=0}
            else{gelbLift10[i][4] +=1;}


            img = document.getElementById("gelbLift4");
            ctx.drawImage(img, gelbLift10[i][0],gelbLift10[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(gelbLift10[i][2]+10,gelbLift10[i][3]+8);
            ctx.lineTo(gelbLift10[i][0]+16,gelbLift10[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(gelbLift10[i][2]+20,gelbLift10[i][3]+8);
            ctx.lineTo(gelbLift10[i][0]+26,gelbLift10[i][1]+0);
            ctx.stroke();

            //console.log(gelbLift10[i][4]);
        }
        //////////////////////////////////////////// Schlepper
        var img2 = document.getElementById("gelbLift11");
        for (var i in gelbLift12) {
            img = document.getElementById("gelbLift10");
            ctx.drawImage(img, gelbLift12[i][2],gelbLift12[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(gelbLift12[i][2]+1-gelbLift12[i][0]+1);
            //y achse
            var vektor2=(gelbLift12[i][3]+1-gelbLift12[i][1]+1);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*20; //Anzahl gondeln
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/400; test++)
            {

                var delta_X=gelbLift12[i][4]*vektor1+test*vektor1*400;
                var delta_Y=gelbLift12[i][4]*vektor2+test*vektor2*400;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,gelbLift12[i][2]-delta_X,gelbLift12[i][3]-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift12[i][2]+10-vektor1*einheitsfaktor+delta_X,gelbLift12[i][3]-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,gelbLift12[i][2]+0-delta_X+vektor1*einheitsfaktor,gelbLift12[i][3]-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift12[i][2]+10-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,gelbLift12[i][3]-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (gelbLift12[i][4]>=einheitsfaktor){gelbLift12[i][4]=0}
            else{gelbLift12[i][4] +=1;}


            img = document.getElementById("gelbLift10");
            ctx.drawImage(img, gelbLift12[i][0],gelbLift12[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(gelbLift12[i][2],gelbLift12[i][3]+1);
            ctx.lineTo(gelbLift12[i][0],gelbLift12[i][1]+1);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(gelbLift12[i][2]+10,gelbLift12[i][3]+1);
            ctx.lineTo(gelbLift12[i][0]+10,gelbLift12[i][1]+1);
            ctx.stroke();



            //console.log(gelbLift10[i][4]);
        }
        //////////////////////////////////////////// kleiner Schlepper
        var img2 = document.getElementById("gelbLift12");
        for (var i in gelbLift14) {
            img = document.getElementById("gelbLift9");
            ctx.drawImage(img, gelbLift14[i][2],gelbLift14[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(gelbLift14[i][2]-gelbLift14[i][0]);
            //y achse
            var vektor2=(gelbLift14[i][3]-gelbLift14[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*25; //Anzahl gondeln
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/500; test++)
            {

                var delta_X=gelbLift14[i][4]*vektor1+test*vektor1*500;
                var delta_Y=gelbLift14[i][4]*vektor2+test*vektor2*500;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,gelbLift14[i][2]-delta_X,gelbLift14[i][3]-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift14[i][2]+10-vektor1*einheitsfaktor+delta_X,gelbLift14[i][3]-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,gelbLift14[i][2]+0-delta_X+vektor1*einheitsfaktor,gelbLift14[i][3]-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,gelbLift14[i][2]+10-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,gelbLift14[i][3]-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (gelbLift14[i][4]>=einheitsfaktor){gelbLift14[i][4]=0}
            else{gelbLift14[i][4] +=1;}


            img = document.getElementById("gelbLift9");
            ctx.drawImage(img, gelbLift14[i][0],gelbLift14[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(gelbLift14[i][2],gelbLift14[i][3]);
            ctx.lineTo(gelbLift14[i][0],gelbLift14[i][1]);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(gelbLift14[i][2]+10,gelbLift14[i][3]);
            ctx.lineTo(gelbLift14[i][0]+10,gelbLift14[i][1]);
            ctx.stroke();
        }
        //////////////////////////////////////////////////////////////////////////////////////////
        // ROT
        //////////////////////////////////////////////////////////////////////////////////////////
        img = document.getElementById("rotHütte1");
        for (var i in rotH1) {
            ctx.drawImage(img, rotH1[i][0], rotH1[i][1],img.width/2 ,img.height/2 );
        }
        img = document.getElementById("rotHütte2");
        for (var i in rotH2) {
            ctx.drawImage(img, rotH2[i][0], rotH2[i][1],img.width/2 ,img.height/2 );
        }
        img = document.getElementById("rotSchirm");
        for (var i in rotSchirm) {
            ctx.drawImage(img, rotSchirm[i][0], rotSchirm[i][1],img.width/2 ,img.height/2 );
        }
        var img2 = document.getElementById("rotLift3");
        for (var i in rotLift3) {
            img = document.getElementById("rotLift2");
            ctx.drawImage(img, rotLift3[i][2],rotLift3[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(rotLift3[i][2]+8-rotLift3[i][0]-8);
            //y achse
            var vektor2=(rotLift3[i][3]+10-rotLift3[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*2;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;

            if (rotLift3[i][5]){
                ctx.drawImage(img2,rotLift3[i][2]-vektor1* rotLift3[i][4],rotLift3[i][3]+8-vektor2*rotLift3[i][4],img2.width/2 ,img2.height/2);
                if (rotLift3[i][4]>=einheitsfaktor){rotLift3[i][5]=false}
                else{rotLift3[i][4] +=1;}
            }
            else{
                ctx.drawImage(img2,rotLift3[i][2]-vektor1* rotLift3[i][4],rotLift3[i][3]+8-vektor2*rotLift3[i][4],img2.width/2 ,img2.height/2);
                if (rotLift3[i][4]<=0){rotLift3[i][5]=true}
                else{rotLift3[i][4] -=1;}
            }

            if (rotLift3[i][5]){
                ctx.drawImage(img2,rotLift3[i][2]+12-vektor1* (einheitsfaktor-rotLift3[i][4]),rotLift3[i][3]+8-vektor2*(einheitsfaktor-rotLift3[i][4]),img2.width/2 ,img2.height/2);
                if (rotLift3[i][4]>=einheitsfaktor){rotLift3[i][5]=false}
                else{rotLift3[i][4] +=1;}
            }
            else{
                ctx.drawImage(img2,rotLift3[i][2]+12-vektor1* (einheitsfaktor-rotLift3[i][4]),rotLift3[i][3]+8-vektor2*(einheitsfaktor-rotLift3[i][4]),img2.width/2 ,img2.height/2);
                if (rotLift3[i][4]<=0){rotLift3[i][5]=true}
                else{rotLift3[i][4] -=1;}
            }

            img = document.getElementById("rotLift1");
            ctx.drawImage(img, rotLift3[i][0],rotLift3[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";
            ctx.beginPath();
            ctx.moveTo(rotLift3[i][2]+8,rotLift3[i][3]+10);
            ctx.lineTo(rotLift3[i][0]+8,rotLift3[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(rotLift3[i][2]+19,rotLift3[i][3]+10);
            ctx.lineTo(rotLift3[i][0]+19,rotLift3[i][1]+0);
            ctx.stroke();

            //console.log(rotLift3[i][4]);
        }
        var img2 = document.getElementById("rotLift6");
        for (var i in rotLift6) {
            img = document.getElementById("rotLift5");
            ctx.drawImage(img, rotLift6[i][2],rotLift6[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(rotLift6[i][2]+8-rotLift6[i][0]-12);
            //y achse
            var vektor2=(rotLift6[i][3]+10-rotLift6[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*2;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/200; test++)
            {

                var delta_X=rotLift6[i][4]*vektor1+test*vektor1*200;
                var delta_Y=rotLift6[i][4]*vektor2+test*vektor2*200;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,rotLift6[i][2]+7-delta_X,rotLift6[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift6[i][2]+17-vektor1*einheitsfaktor+delta_X,rotLift6[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,rotLift6[i][2]+7-delta_X+vektor1*einheitsfaktor,rotLift6[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift6[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,rotLift6[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (rotLift6[i][4]>=einheitsfaktor){rotLift6[i][4]=0}
            else{rotLift6[i][4] +=1;}


            img = document.getElementById("rotLift4");
            ctx.drawImage(img, rotLift6[i][0],rotLift6[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(rotLift6[i][2]+10,rotLift6[i][3]+8);
            ctx.lineTo(rotLift6[i][0]+16,rotLift6[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(rotLift6[i][2]+20,rotLift6[i][3]+8);
            ctx.lineTo(rotLift6[i][0]+26,rotLift6[i][1]+0);
            ctx.stroke();

            //console.log(rotLift6[i][4]);
        }
        var img2 = document.getElementById("rotLift7");
        for (var i in rotLift8) {
            img = document.getElementById("rotLift5");
            ctx.drawImage(img, rotLift8[i][2],rotLift8[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(rotLift8[i][2]+8-rotLift8[i][0]-15);
            //y achse
            var vektor2=(rotLift8[i][3]+10-rotLift8[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*5;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/150; test++)
            {

                var delta_X=rotLift8[i][4]*vektor1+test*vektor1*150;
                var delta_Y=rotLift8[i][4]*vektor2+test*vektor2*150;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,rotLift8[i][2]+7-delta_X,rotLift8[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift8[i][2]+17-vektor1*einheitsfaktor+delta_X,rotLift8[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,rotLift8[i][2]+7-delta_X+vektor1*einheitsfaktor,rotLift8[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift8[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,rotLift8[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (rotLift8[i][4]>=einheitsfaktor){rotLift8[i][4]=0}
            else{rotLift8[i][4] +=1;}


            img = document.getElementById("rotLift4");
            ctx.drawImage(img, rotLift8[i][0],rotLift8[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(rotLift8[i][2]+10,rotLift8[i][3]+8);
            ctx.lineTo(rotLift8[i][0]+16,rotLift8[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(rotLift8[i][2]+20,rotLift8[i][3]+8);
            ctx.lineTo(rotLift8[i][0]+26,rotLift8[i][1]+0);
            ctx.stroke();

            //console.log(rotLift8[i][4]);
        }
        var img2 = document.getElementById("rotLift8");
        for (var i in rotLift10) {
            img = document.getElementById("rotLift5");
            ctx.drawImage(img, rotLift10[i][2],rotLift10[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(rotLift10[i][2]+8-rotLift10[i][0]-15);
            //y achse
            var vektor2=(rotLift10[i][3]+10-rotLift10[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*10;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/300; test++)
            {

                var delta_X=rotLift10[i][4]*vektor1+test*vektor1*300;
                var delta_Y=rotLift10[i][4]*vektor2+test*vektor2*300;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,rotLift10[i][2]+7-delta_X,rotLift10[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift10[i][2]+17-vektor1*einheitsfaktor+delta_X,rotLift10[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,rotLift10[i][2]+7-delta_X+vektor1*einheitsfaktor,rotLift10[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift10[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,rotLift10[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (rotLift10[i][4]>=einheitsfaktor){rotLift10[i][4]=0}
            else{rotLift10[i][4] +=1;}


            img = document.getElementById("rotLift4");
            ctx.drawImage(img, rotLift10[i][0],rotLift10[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(rotLift10[i][2]+10,rotLift10[i][3]+8);
            ctx.lineTo(rotLift10[i][0]+16,rotLift10[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(rotLift10[i][2]+20,rotLift10[i][3]+8);
            ctx.lineTo(rotLift10[i][0]+26,rotLift10[i][1]+0);
            ctx.stroke();

            //console.log(rotLift10[i][4]);
        }
        //////////////////////////////////////////// Schlepper
        var img2 = document.getElementById("rotLift11");
        for (var i in rotLift12) {
            img = document.getElementById("rotLift10");
            ctx.drawImage(img, rotLift12[i][2],rotLift12[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(rotLift12[i][2]+1-rotLift12[i][0]+1);
            //y achse
            var vektor2=(rotLift12[i][3]+1-rotLift12[i][1]+1);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*20; //Anzahl gondeln
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/400; test++)
            {

                var delta_X=rotLift12[i][4]*vektor1+test*vektor1*400;
                var delta_Y=rotLift12[i][4]*vektor2+test*vektor2*400;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,rotLift12[i][2]-delta_X,rotLift12[i][3]-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift12[i][2]+10-vektor1*einheitsfaktor+delta_X,rotLift12[i][3]-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,rotLift12[i][2]+0-delta_X+vektor1*einheitsfaktor,rotLift12[i][3]-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift12[i][2]+10-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,rotLift12[i][3]-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (rotLift12[i][4]>=einheitsfaktor){rotLift12[i][4]=0}
            else{rotLift12[i][4] +=1;}


            img = document.getElementById("rotLift10");
            ctx.drawImage(img, rotLift12[i][0],rotLift12[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(rotLift12[i][2],rotLift12[i][3]+1);
            ctx.lineTo(rotLift12[i][0],rotLift12[i][1]+1);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(rotLift12[i][2]+10,rotLift12[i][3]+1);
            ctx.lineTo(rotLift12[i][0]+10,rotLift12[i][1]+1);
            ctx.stroke();
        }
        //////////////////////////////////////////// kleiner Schlepper
        var img2 = document.getElementById("rotLift12");
        for (var i in rotLift14) {
            img = document.getElementById("rotLift9");
            ctx.drawImage(img, rotLift14[i][2],rotLift14[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(rotLift14[i][2]-rotLift14[i][0]);
            //y achse
            var vektor2=(rotLift14[i][3]-rotLift14[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*25; //Anzahl gondeln
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/500; test++)
            {

                var delta_X=rotLift14[i][4]*vektor1+test*vektor1*500;
                var delta_Y=rotLift14[i][4]*vektor2+test*vektor2*500;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,rotLift14[i][2]-delta_X,rotLift14[i][3]-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift14[i][2]+10-vektor1*einheitsfaktor+delta_X,rotLift14[i][3]-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,rotLift14[i][2]+0-delta_X+vektor1*einheitsfaktor,rotLift14[i][3]-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,rotLift14[i][2]+10-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,rotLift14[i][3]-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (rotLift14[i][4]>=einheitsfaktor){rotLift14[i][4]=0}
            else{rotLift14[i][4] +=1;}


            img = document.getElementById("rotLift9");
            ctx.drawImage(img, rotLift14[i][0],rotLift14[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(rotLift14[i][2],rotLift14[i][3]);
            ctx.lineTo(rotLift14[i][0],rotLift14[i][1]);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(rotLift14[i][2]+10,rotLift14[i][3]);
            ctx.lineTo(rotLift14[i][0]+10,rotLift14[i][1]);
            ctx.stroke();
        }

        //////////////////////////////////////////////////////////////////////////////////////////
        // Blau
        //////////////////////////////////////////////////////////////////////////////////////////
        img = document.getElementById("blauHütte1");
        for (var i in blauH1) {
            ctx.drawImage(img, blauH1[i][0], blauH1[i][1],img.width/2 ,img.height/2 );
        }
        img = document.getElementById("blauHütte2");
        for (var i in blauH2) {
            ctx.drawImage(img, blauH2[i][0], blauH2[i][1],img.width/2 ,img.height/2 );
        }
        img = document.getElementById("blauSchirm");
        for (var i in blauSchirm) {
            ctx.drawImage(img, blauSchirm[i][0], blauSchirm[i][1],img.width/2 ,img.height/2 );
        }
        var img2 = document.getElementById("blauLift3");
        for (var i in blauLift3) {
            img = document.getElementById("blauLift2");
            ctx.drawImage(img, blauLift3[i][2],blauLift3[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(blauLift3[i][2]+8-blauLift3[i][0]-8);
            //y achse
            var vektor2=(blauLift3[i][3]+10-blauLift3[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*2;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;

            if (blauLift3[i][5]){
                ctx.drawImage(img2,blauLift3[i][2]-vektor1* blauLift3[i][4],blauLift3[i][3]+8-vektor2*blauLift3[i][4],img2.width/2 ,img2.height/2);
                if (blauLift3[i][4]>=einheitsfaktor){blauLift3[i][5]=false}
                else{blauLift3[i][4] +=1;}
            }
            else{
                ctx.drawImage(img2,blauLift3[i][2]-vektor1* blauLift3[i][4],blauLift3[i][3]+8-vektor2*blauLift3[i][4],img2.width/2 ,img2.height/2);
                if (blauLift3[i][4]<=0){blauLift3[i][5]=true}
                else{blauLift3[i][4] -=1;}
            }

            if (blauLift3[i][5]){
                ctx.drawImage(img2,blauLift3[i][2]+12-vektor1* (einheitsfaktor-blauLift3[i][4]),blauLift3[i][3]+8-vektor2*(einheitsfaktor-blauLift3[i][4]),img2.width/2 ,img2.height/2);
                if (blauLift3[i][4]>=einheitsfaktor){blauLift3[i][5]=false}
                else{blauLift3[i][4] +=1;}
            }
            else{
                ctx.drawImage(img2,blauLift3[i][2]+12-vektor1* (einheitsfaktor-blauLift3[i][4]),blauLift3[i][3]+8-vektor2*(einheitsfaktor-blauLift3[i][4]),img2.width/2 ,img2.height/2);
                if (blauLift3[i][4]<=0){blauLift3[i][5]=true}
                else{blauLift3[i][4] -=1;}
            }

            img = document.getElementById("blauLift1");
            ctx.drawImage(img, blauLift3[i][0],blauLift3[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";
            ctx.beginPath();
            ctx.moveTo(blauLift3[i][2]+8,blauLift3[i][3]+10);
            ctx.lineTo(blauLift3[i][0]+8,blauLift3[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(blauLift3[i][2]+19,blauLift3[i][3]+10);
            ctx.lineTo(blauLift3[i][0]+19,blauLift3[i][1]+0);
            ctx.stroke();

            //console.log(blauLift3[i][4]);
        }
        var img2 = document.getElementById("blauLift6");
        for (var i in blauLift6) {
            img = document.getElementById("blauLift5");
            ctx.drawImage(img, blauLift6[i][2],blauLift6[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(blauLift6[i][2]+8-blauLift6[i][0]-12);
            //y achse
            var vektor2=(blauLift6[i][3]+10-blauLift6[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*2;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/200; test++)
            {

                var delta_X=blauLift6[i][4]*vektor1+test*vektor1*200;
                var delta_Y=blauLift6[i][4]*vektor2+test*vektor2*200;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,blauLift6[i][2]+7-delta_X,blauLift6[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift6[i][2]+17-vektor1*einheitsfaktor+delta_X,blauLift6[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,blauLift6[i][2]+7-delta_X+vektor1*einheitsfaktor,blauLift6[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift6[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,blauLift6[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (blauLift6[i][4]>=einheitsfaktor){blauLift6[i][4]=0}
            else{blauLift6[i][4] +=1;}


            img = document.getElementById("blauLift4");
            ctx.drawImage(img, blauLift6[i][0],blauLift6[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(blauLift6[i][2]+10,blauLift6[i][3]+8);
            ctx.lineTo(blauLift6[i][0]+16,blauLift6[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(blauLift6[i][2]+20,blauLift6[i][3]+8);
            ctx.lineTo(blauLift6[i][0]+26,blauLift6[i][1]+0);
            ctx.stroke();

            //console.log(blauLift6[i][4]);
        }
        var img2 = document.getElementById("blauLift7");
        for (var i in blauLift8) {
            img = document.getElementById("blauLift5");
            ctx.drawImage(img, blauLift8[i][2],blauLift8[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(blauLift8[i][2]+8-blauLift8[i][0]-15);
            //y achse
            var vektor2=(blauLift8[i][3]+10-blauLift8[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*5;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/150; test++)
            {

                var delta_X=blauLift8[i][4]*vektor1+test*vektor1*150;
                var delta_Y=blauLift8[i][4]*vektor2+test*vektor2*150;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,blauLift8[i][2]+7-delta_X,blauLift8[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift8[i][2]+17-vektor1*einheitsfaktor+delta_X,blauLift8[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,blauLift8[i][2]+7-delta_X+vektor1*einheitsfaktor,blauLift8[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift8[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,blauLift8[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (blauLift8[i][4]>=einheitsfaktor){blauLift8[i][4]=0}
            else{blauLift8[i][4] +=1;}


            img = document.getElementById("blauLift4");
            ctx.drawImage(img, blauLift8[i][0],blauLift8[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(blauLift8[i][2]+10,blauLift8[i][3]+8);
            ctx.lineTo(blauLift8[i][0]+16,blauLift8[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(blauLift8[i][2]+20,blauLift8[i][3]+8);
            ctx.lineTo(blauLift8[i][0]+26,blauLift8[i][1]+0);
            ctx.stroke();

            //console.log(blauLift8[i][4]);
        }
        var img2 = document.getElementById("blauLift8");
        for (var i in blauLift10) {
            img = document.getElementById("blauLift5");
            ctx.drawImage(img, blauLift10[i][2],blauLift10[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(blauLift10[i][2]+8-blauLift10[i][0]-15);
            //y achse
            var vektor2=(blauLift10[i][3]+10-blauLift10[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*10;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/300; test++)
            {

                var delta_X=blauLift10[i][4]*vektor1+test*vektor1*300;
                var delta_Y=blauLift10[i][4]*vektor2+test*vektor2*300;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,blauLift10[i][2]+7-delta_X,blauLift10[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift10[i][2]+17-vektor1*einheitsfaktor+delta_X,blauLift10[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,blauLift10[i][2]+7-delta_X+vektor1*einheitsfaktor,blauLift10[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift10[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,blauLift10[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (blauLift10[i][4]>=einheitsfaktor){blauLift10[i][4]=0}
            else{blauLift10[i][4] +=1;}


            img = document.getElementById("blauLift4");
            ctx.drawImage(img, blauLift10[i][0],blauLift10[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(blauLift10[i][2]+10,blauLift10[i][3]+8);
            ctx.lineTo(blauLift10[i][0]+16,blauLift10[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(blauLift10[i][2]+20,blauLift10[i][3]+8);
            ctx.lineTo(blauLift10[i][0]+26,blauLift10[i][1]+0);
            ctx.stroke();

            //console.log(blauLift10[i][4]);
        }
        //////////////////////////////////////////// Schlepper
        var img2 = document.getElementById("blauLift11");
        for (var i in blauLift12) {
            img = document.getElementById("blauLift10");
            ctx.drawImage(img, blauLift12[i][2],blauLift12[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(blauLift12[i][2]+1-blauLift12[i][0]+1);
            //y achse
            var vektor2=(blauLift12[i][3]+1-blauLift12[i][1]+1);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*20; //Anzahl gondeln
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/400; test++)
            {

                var delta_X=blauLift12[i][4]*vektor1+test*vektor1*400;
                var delta_Y=blauLift12[i][4]*vektor2+test*vektor2*400;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,blauLift12[i][2]-delta_X,blauLift12[i][3]-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift12[i][2]+10-vektor1*einheitsfaktor+delta_X,blauLift12[i][3]-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,blauLift12[i][2]+0-delta_X+vektor1*einheitsfaktor,blauLift12[i][3]-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift12[i][2]+10-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,blauLift12[i][3]-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (blauLift12[i][4]>=einheitsfaktor){blauLift12[i][4]=0}
            else{blauLift12[i][4] +=1;}


            img = document.getElementById("blauLift10");
            ctx.drawImage(img, blauLift12[i][0],blauLift12[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(blauLift12[i][2],blauLift12[i][3]+1);
            ctx.lineTo(blauLift12[i][0],blauLift12[i][1]+1);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(blauLift12[i][2]+10,blauLift12[i][3]+1);
            ctx.lineTo(blauLift12[i][0]+10,blauLift12[i][1]+1);
            ctx.stroke();



            //console.log(blauLift10[i][4]);
        }
        //////////////////////////////////////////// kleiner Schlepper
        var img2 = document.getElementById("blauLift12");
        for (var i in blauLift14) {
            img = document.getElementById("blauLift9");
            ctx.drawImage(img, blauLift14[i][2],blauLift14[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(blauLift14[i][2]-blauLift14[i][0]);
            //y achse
            var vektor2=(blauLift14[i][3]-blauLift14[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*25; //Anzahl gondeln
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/500; test++)
            {

                var delta_X=blauLift14[i][4]*vektor1+test*vektor1*500;
                var delta_Y=blauLift14[i][4]*vektor2+test*vektor2*500;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,blauLift14[i][2]-delta_X,blauLift14[i][3]-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift14[i][2]+10-vektor1*einheitsfaktor+delta_X,blauLift14[i][3]-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,blauLift14[i][2]+0-delta_X+vektor1*einheitsfaktor,blauLift14[i][3]-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,blauLift14[i][2]+10-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,blauLift14[i][3]-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (blauLift14[i][4]>=einheitsfaktor){blauLift14[i][4]=0}
            else{blauLift14[i][4] +=1;}


            img = document.getElementById("blauLift9");
            ctx.drawImage(img, blauLift14[i][0],blauLift14[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(blauLift14[i][2],blauLift14[i][3]);
            ctx.lineTo(blauLift14[i][0],blauLift14[i][1]);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(blauLift14[i][2]+10,blauLift14[i][3]);
            ctx.lineTo(blauLift14[i][0]+10,blauLift14[i][1]);
            ctx.stroke();
        }

        //////////////////////////////////////////////////////////////////////////////////////////
        // Grün
        //////////////////////////////////////////////////////////////////////////////////////////
        img = document.getElementById("grünHütte1");
        for (var i in grünH1) {
            ctx.drawImage(img, grünH1[i][0], grünH1[i][1],img.width/2 ,img.height/2 );
        }
        img = document.getElementById("grünHütte2");
        for (var i in grünH2) {
            ctx.drawImage(img, grünH2[i][0], grünH2[i][1],img.width/2 ,img.height/2 );
        }
        img = document.getElementById("grünSchirm");
        for (var i in grünSchirm) {
            ctx.drawImage(img, grünSchirm[i][0], grünSchirm[i][1],img.width/2 ,img.height/2 );
        }
        var img2 = document.getElementById("grünLift3");
        for (var i in grünLift3) {
            img = document.getElementById("grünLift2");
            ctx.drawImage(img, grünLift3[i][2],grünLift3[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(grünLift3[i][2]+8-grünLift3[i][0]-8);
            //y achse
            var vektor2=(grünLift3[i][3]+10-grünLift3[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*2;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;

            if (grünLift3[i][5]){
                ctx.drawImage(img2,grünLift3[i][2]-vektor1* grünLift3[i][4],grünLift3[i][3]+8-vektor2*grünLift3[i][4],img2.width/2 ,img2.height/2);
                if (grünLift3[i][4]>=einheitsfaktor){grünLift3[i][5]=false}
                else{grünLift3[i][4] +=1;}
            }
            else{
                ctx.drawImage(img2,grünLift3[i][2]-vektor1* grünLift3[i][4],grünLift3[i][3]+8-vektor2*grünLift3[i][4],img2.width/2 ,img2.height/2);
                if (grünLift3[i][4]<=0){grünLift3[i][5]=true}
                else{grünLift3[i][4] -=1;}
            }

            if (grünLift3[i][5]){
                ctx.drawImage(img2,grünLift3[i][2]+12-vektor1* (einheitsfaktor-grünLift3[i][4]),grünLift3[i][3]+8-vektor2*(einheitsfaktor-grünLift3[i][4]),img2.width/2 ,img2.height/2);
                if (grünLift3[i][4]>=einheitsfaktor){grünLift3[i][5]=false}
                else{grünLift3[i][4] +=1;}
            }
            else{
                ctx.drawImage(img2,grünLift3[i][2]+12-vektor1* (einheitsfaktor-grünLift3[i][4]),grünLift3[i][3]+8-vektor2*(einheitsfaktor-grünLift3[i][4]),img2.width/2 ,img2.height/2);
                if (grünLift3[i][4]<=0){grünLift3[i][5]=true}
                else{grünLift3[i][4] -=1;}
            }

            img = document.getElementById("grünLift1");
            ctx.drawImage(img, grünLift3[i][0],grünLift3[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";
            ctx.beginPath();
            ctx.moveTo(grünLift3[i][2]+8,grünLift3[i][3]+10);
            ctx.lineTo(grünLift3[i][0]+8,grünLift3[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(grünLift3[i][2]+19,grünLift3[i][3]+10);
            ctx.lineTo(grünLift3[i][0]+19,grünLift3[i][1]+0);
            ctx.stroke();

            //console.log(grünLift3[i][4]);
        }
        var img2 = document.getElementById("grünLift6");
        for (var i in grünLift6) {
            img = document.getElementById("grünLift5");
            ctx.drawImage(img, grünLift6[i][2],grünLift6[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(grünLift6[i][2]+8-grünLift6[i][0]-12);
            //y achse
            var vektor2=(grünLift6[i][3]+10-grünLift6[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*2;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/200; test++)
            {

                var delta_X=grünLift6[i][4]*vektor1+test*vektor1*200;
                var delta_Y=grünLift6[i][4]*vektor2+test*vektor2*200;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,grünLift6[i][2]+7-delta_X,grünLift6[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift6[i][2]+17-vektor1*einheitsfaktor+delta_X,grünLift6[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,grünLift6[i][2]+7-delta_X+vektor1*einheitsfaktor,grünLift6[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift6[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,grünLift6[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (grünLift6[i][4]>=einheitsfaktor){grünLift6[i][4]=0}
            else{grünLift6[i][4] +=1;}


            img = document.getElementById("grünLift4");
            ctx.drawImage(img, grünLift6[i][0],grünLift6[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(grünLift6[i][2]+10,grünLift6[i][3]+8);
            ctx.lineTo(grünLift6[i][0]+16,grünLift6[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(grünLift6[i][2]+20,grünLift6[i][3]+8);
            ctx.lineTo(grünLift6[i][0]+26,grünLift6[i][1]+0);
            ctx.stroke();

            //console.log(grünLift6[i][4]);
        }
        var img2 = document.getElementById("grünLift7");
        for (var i in grünLift8) {
            img = document.getElementById("grünLift5");
            ctx.drawImage(img, grünLift8[i][2],grünLift8[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(grünLift8[i][2]+8-grünLift8[i][0]-15);
            //y achse
            var vektor2=(grünLift8[i][3]+10-grünLift8[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*5;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/150; test++)
            {

                var delta_X=grünLift8[i][4]*vektor1+test*vektor1*150;
                var delta_Y=grünLift8[i][4]*vektor2+test*vektor2*150;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,grünLift8[i][2]+7-delta_X,grünLift8[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift8[i][2]+17-vektor1*einheitsfaktor+delta_X,grünLift8[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,grünLift8[i][2]+7-delta_X+vektor1*einheitsfaktor,grünLift8[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift8[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,grünLift8[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (grünLift8[i][4]>=einheitsfaktor){grünLift8[i][4]=0}
            else{grünLift8[i][4] +=1;}


            img = document.getElementById("grünLift4");
            ctx.drawImage(img, grünLift8[i][0],grünLift8[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(grünLift8[i][2]+10,grünLift8[i][3]+8);
            ctx.lineTo(grünLift8[i][0]+16,grünLift8[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(grünLift8[i][2]+20,grünLift8[i][3]+8);
            ctx.lineTo(grünLift8[i][0]+26,grünLift8[i][1]+0);
            ctx.stroke();

            //console.log(grünLift8[i][4]);
        }
        var img2 = document.getElementById("grünLift8");
        for (var i in grünLift10) {
            img = document.getElementById("grünLift5");
            ctx.drawImage(img, grünLift10[i][2],grünLift10[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(grünLift10[i][2]+8-grünLift10[i][0]-15);
            //y achse
            var vektor2=(grünLift10[i][3]+10-grünLift10[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*10;
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/300; test++)
            {

                var delta_X=grünLift10[i][4]*vektor1+test*vektor1*300;
                var delta_Y=grünLift10[i][4]*vektor2+test*vektor2*300;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,grünLift10[i][2]+7-delta_X,grünLift10[i][3]+8-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift10[i][2]+17-vektor1*einheitsfaktor+delta_X,grünLift10[i][3]+8-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,grünLift10[i][2]+7-delta_X+vektor1*einheitsfaktor,grünLift10[i][3]+8-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift10[i][2]+17-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,grünLift10[i][3]+8-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (grünLift10[i][4]>=einheitsfaktor){grünLift10[i][4]=0}
            else{grünLift10[i][4] +=1;}


            img = document.getElementById("grünLift4");
            ctx.drawImage(img, grünLift10[i][0],grünLift10[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(grünLift10[i][2]+10,grünLift10[i][3]+8);
            ctx.lineTo(grünLift10[i][0]+16,grünLift10[i][1]+0);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(grünLift10[i][2]+20,grünLift10[i][3]+8);
            ctx.lineTo(grünLift10[i][0]+26,grünLift10[i][1]+0);
            ctx.stroke();

            //console.log(grünLift10[i][4]);
        }
        //////////////////////////////////////////// Schlepper
        var img2 = document.getElementById("grünLift11");
        for (var i in grünLift12) {
            img = document.getElementById("grünLift10");
            ctx.drawImage(img, grünLift12[i][2],grünLift12[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(grünLift12[i][2]+1-grünLift12[i][0]+1);
            //y achse
            var vektor2=(grünLift12[i][3]+1-grünLift12[i][1]+1);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*20; //Anzahl gondeln
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/400; test++)
            {

                var delta_X=grünLift12[i][4]*vektor1+test*vektor1*400;
                var delta_Y=grünLift12[i][4]*vektor2+test*vektor2*400;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,grünLift12[i][2]-delta_X,grünLift12[i][3]-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift12[i][2]+10-vektor1*einheitsfaktor+delta_X,grünLift12[i][3]-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,grünLift12[i][2]+0-delta_X+vektor1*einheitsfaktor,grünLift12[i][3]-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift12[i][2]+10-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,grünLift12[i][3]-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (grünLift12[i][4]>=einheitsfaktor){grünLift12[i][4]=0}
            else{grünLift12[i][4] +=1;}


            img = document.getElementById("grünLift10");
            ctx.drawImage(img, grünLift12[i][0],grünLift12[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(grünLift12[i][2],grünLift12[i][3]+1);
            ctx.lineTo(grünLift12[i][0],grünLift12[i][1]+1);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(grünLift12[i][2]+10,grünLift12[i][3]+1);
            ctx.lineTo(grünLift12[i][0]+10,grünLift12[i][1]+1);
            ctx.stroke();



            //console.log(grünLift10[i][4]);
        }
        //////////////////////////////////////////// kleiner Schlepper
        var img2 = document.getElementById("grünLift12");
        for (var i in grünLift14) {
            img = document.getElementById("grünLift9");
            ctx.drawImage(img, grünLift14[i][2],grünLift14[i][3],img.width/2 ,img.height/2 );


            //x achse
            var vektor1=(grünLift14[i][2]-grünLift14[i][0]);
            //y achse
            var vektor2=(grünLift14[i][3]-grünLift14[i][1]);

            var einheitsfaktor=Math.sqrt(vektor1*vektor1+vektor2*vektor2)*25; //Anzahl gondeln
            vektor1=vektor1/einheitsfaktor;
            vektor2=vektor2/einheitsfaktor;
            //Gondel runter
            for (var test = 0; test <= einheitsfaktor/500; test++)
            {

                var delta_X=grünLift14[i][4]*vektor1+test*vektor1*500;
                var delta_Y=grünLift14[i][4]*vektor2+test*vektor2*500;

                if (delta_Y>=vektor2*einheitsfaktor)
                {
                    ctx.drawImage(img2,grünLift14[i][2]-delta_X,grünLift14[i][3]-delta_Y,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift14[i][2]+10-vektor1*einheitsfaktor+delta_X,grünLift14[i][3]-vektor2*einheitsfaktor+delta_Y,img2.width/2 ,img2.height/2);
                }
                else{
                    ctx.drawImage(img2,grünLift14[i][2]+0-delta_X+vektor1*einheitsfaktor,grünLift14[i][3]-delta_Y+vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                    ctx.drawImage(img2,grünLift14[i][2]+10-vektor1*einheitsfaktor+delta_X-vektor1*einheitsfaktor,grünLift14[i][3]-vektor2*einheitsfaktor+delta_Y-vektor2*einheitsfaktor,img2.width/2 ,img2.height/2);
                }
            }

            if (grünLift14[i][4]>=einheitsfaktor){grünLift14[i][4]=0}
            else{grünLift14[i][4] +=1;}


            img = document.getElementById("grünLift9");
            ctx.drawImage(img, grünLift14[i][0],grünLift14[i][1],img.width/2 ,img.height/2 );
            ctx.strokeStyle="#A9A9A9";

            ctx.beginPath();
            ctx.moveTo(grünLift14[i][2],grünLift14[i][3]);
            ctx.lineTo(grünLift14[i][0],grünLift14[i][1]);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(grünLift14[i][2]+10,grünLift14[i][3]);
            ctx.lineTo(grünLift14[i][0]+10,grünLift14[i][1]);
            ctx.stroke();
        }

        //////////////////////////////////////////////////////////////
        //cursor
        ctx.globalAlpha = 0.5;
        if (color=="gelb")
        {
            if (Element==1){
                img = document.getElementById("gelbHütte1");
                ctx.drawImage(img, mousex-39,mousey-50,img.width/2 ,img.height/2 );
            }
            if (Element==2){
                img = document.getElementById("gelbHütte2");
                ctx.drawImage(img, mousex-34,mousey-40,img.width/2 ,img.height/2 );
            }
            if (Element==3){
                img = document.getElementById("gelbSchirm");
                ctx.drawImage(img, mousex-30,mousey-43,img.width/2 ,img.height/2 );
            }
            if (Element==4){
            img = document.getElementById("gelbLift1");
            ctx.drawImage(img, mousex-12,mousey-26,img.width/2 ,img.height/2 );
        }
            if (Element==5){
                img = document.getElementById("gelbLift2");
                ctx.drawImage(img, mousex-12,mousey-26,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("gelbLift1");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+8,mousey-26+10);
                    ctx.lineTo(templist[0]+8,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+18,mousey-26+10);
                    ctx.lineTo(templist[0]+18,templist[1]+0);
                    ctx.stroke();
                }
                else Element=4;
            }
            if (Element==6){
                img = document.getElementById("gelbLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==7){
                img = document.getElementById("gelbLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("gelbLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=6;
            }
            if (Element==8){
                img = document.getElementById("gelbLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==9){
                img = document.getElementById("gelbLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("gelbLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=8;
            }
            if (Element==10){
                img = document.getElementById("gelbLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==11){
                img = document.getElementById("gelbLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("gelbLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=10;
            }
            if (Element==12){
                img = document.getElementById("gelbLift10");
                ctx.drawImage(img, mousex-5,mousey-18,img.width/2 ,img.height/2 );
            }
            if (Element==13){
                img = document.getElementById("gelbLift10");
                ctx.drawImage(img, mousex-5,mousey-18,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("gelbLift10");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-5,mousey-15);
                    ctx.lineTo(templist[0],templist[1]+1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex+5,mousey-15);
                    ctx.lineTo(templist[0]+10,templist[1]+1);
                    ctx.stroke();
                }
                else Element=12;
            }
            if (Element==14){
                img = document.getElementById("gelbLift9");
                ctx.drawImage(img, mousex-5,mousey-11,img.width/2 ,img.height/2 );
            }
            if (Element==15){
                img = document.getElementById("gelbLift9");
                ctx.drawImage(img, mousex-5,mousey-11,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("gelbLift9");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-5,mousey-10);
                    ctx.lineTo(templist[0],templist[1]+1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex+5,mousey-10);
                    ctx.lineTo(templist[0]+10,templist[1]+1);
                    ctx.stroke();
                }
                else Element=14;
            }
        }
        if (color=="rot")
        {
            if (Element==1){
                img = document.getElementById("rotHütte1");
                ctx.drawImage(img, mousex-39,mousey-50,img.width/2 ,img.height/2 );
            }
            if (Element==2){
                img = document.getElementById("rotHütte2");
                ctx.drawImage(img, mousex-34,mousey-40,img.width/2 ,img.height/2 );
            }
            if (Element==3){
                img = document.getElementById("rotSchirm");
                ctx.drawImage(img, mousex-30,mousey-43,img.width/2 ,img.height/2 );
            }
            if (Element==4){
            img = document.getElementById("rotLift1");
            ctx.drawImage(img, mousex-12,mousey-26,img.width/2 ,img.height/2 );
        }
            if (Element==5){
                img = document.getElementById("rotLift2");
                ctx.drawImage(img, mousex-12,mousey-26,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("rotLift1");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+8,mousey-26+10);
                    ctx.lineTo(templist[0]+8,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+18,mousey-26+10);
                    ctx.lineTo(templist[0]+18,templist[1]+0);
                    ctx.stroke();
                }
                else Element=4;
            }
            if (Element==6){
                img = document.getElementById("rotLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==7){
                img = document.getElementById("rotLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("rotLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=6;
            }
            if (Element==8){
                img = document.getElementById("rotLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==9){
                img = document.getElementById("rotLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("rotLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=8;
            }
            if (Element==10){
                img = document.getElementById("rotLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==11){
                img = document.getElementById("rotLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("rotLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=10;
            }
            if (Element==12){
                img = document.getElementById("rotLift10");
                ctx.drawImage(img, mousex-5,mousey-18,img.width/2 ,img.height/2 );
            }
            if (Element==13){
                img = document.getElementById("rotLift10");
                ctx.drawImage(img, mousex-5,mousey-18,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("rotLift10");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-5,mousey-15);
                    ctx.lineTo(templist[0],templist[1]+1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex+5,mousey-15);
                    ctx.lineTo(templist[0]+10,templist[1]+1);
                    ctx.stroke();
                }
                else Element=12;
            }
            if (Element==14){
                img = document.getElementById("rotLift9");
                ctx.drawImage(img, mousex-5,mousey-11,img.width/2 ,img.height/2 );
            }
            if (Element==15){
                img = document.getElementById("rotLift9");
                ctx.drawImage(img, mousex-5,mousey-11,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("rotLift9");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-5,mousey-10);
                    ctx.lineTo(templist[0],templist[1]+1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex+5,mousey-10);
                    ctx.lineTo(templist[0]+10,templist[1]+1);
                    ctx.stroke();
                }
                else Element=14;
            }
        }
        if (color=="blau")
        {
            if (Element==1){
                img = document.getElementById("blauHütte1");
                ctx.drawImage(img, mousex-39,mousey-50,img.width/2 ,img.height/2 );
            }
            if (Element==2){
                img = document.getElementById("blauHütte2");
                ctx.drawImage(img, mousex-34,mousey-40,img.width/2 ,img.height/2 );
            }
            if (Element==3){
                img = document.getElementById("blauSchirm");
                ctx.drawImage(img, mousex-30,mousey-43,img.width/2 ,img.height/2 );
            }
            if (Element==4){
            img = document.getElementById("blauLift1");
            ctx.drawImage(img, mousex-12,mousey-26,img.width/2 ,img.height/2 );
        }
            if (Element==5){
                img = document.getElementById("blauLift2");
                ctx.drawImage(img, mousex-12,mousey-26,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("blauLift1");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+8,mousey-26+10);
                    ctx.lineTo(templist[0]+8,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+18,mousey-26+10);
                    ctx.lineTo(templist[0]+18,templist[1]+0);
                    ctx.stroke();
                }
                else Element=4;
            }
            if (Element==6){
                img = document.getElementById("blauLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==7){
                img = document.getElementById("blauLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("blauLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=6;
            }
            if (Element==8){
                img = document.getElementById("blauLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==9){
                img = document.getElementById("blauLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("blauLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=8;
            }
            if (Element==10){
                img = document.getElementById("blauLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==11){
                img = document.getElementById("blauLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("blauLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=10;
            }
            if (Element==12){
                img = document.getElementById("blauLift10");
                ctx.drawImage(img, mousex-5,mousey-18,img.width/2 ,img.height/2 );
            }
            if (Element==13){
                img = document.getElementById("blauLift10");
                ctx.drawImage(img, mousex-5,mousey-18,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("blauLift10");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-5,mousey-15);
                    ctx.lineTo(templist[0],templist[1]+1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex+5,mousey-15);
                    ctx.lineTo(templist[0]+10,templist[1]+1);
                    ctx.stroke();
                }
                else Element=12;
            }
            if (Element==14){
                img = document.getElementById("blauLift9");
                ctx.drawImage(img, mousex-5,mousey-11,img.width/2 ,img.height/2 );
            }
            if (Element==15){
                img = document.getElementById("blauLift9");
                ctx.drawImage(img, mousex-5,mousey-11,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("blauLift9");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-5,mousey-10);
                    ctx.lineTo(templist[0],templist[1]+1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex+5,mousey-10);
                    ctx.lineTo(templist[0]+10,templist[1]+1);
                    ctx.stroke();
                }
                else Element=14;
            }
        }
        if (color=="grün")
        {
            if (Element==1){
                img = document.getElementById("grünHütte1");
                ctx.drawImage(img, mousex-39,mousey-50,img.width/2 ,img.height/2 );
            }
            if (Element==2){
                img = document.getElementById("grünHütte2");
                ctx.drawImage(img, mousex-34,mousey-40,img.width/2 ,img.height/2 );
            }
            if (Element==3){
                img = document.getElementById("grünSchirm");
                ctx.drawImage(img, mousex-30,mousey-43,img.width/2 ,img.height/2 );
            }
            if (Element==4){
            img = document.getElementById("grünLift1");
            ctx.drawImage(img, mousex-12,mousey-26,img.width/2 ,img.height/2 );
        }
            if (Element==5){
                img = document.getElementById("grünLift2");
                ctx.drawImage(img, mousex-12,mousey-26,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("grünLift1");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+8,mousey-26+10);
                    ctx.lineTo(templist[0]+8,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+18,mousey-26+10);
                    ctx.lineTo(templist[0]+18,templist[1]+0);
                    ctx.stroke();
                }
                else Element=4;
            }
            if (Element==6){
                img = document.getElementById("grünLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==7){
                img = document.getElementById("grünLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("grünLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=6;
            }
            if (Element==8){
                img = document.getElementById("grünLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==9){
                img = document.getElementById("grünLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("grünLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=8;
            }
            if (Element==10){
                img = document.getElementById("grünLift4");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
            }
            if (Element==11){
                img = document.getElementById("grünLift5");
                ctx.drawImage(img, mousex-20,mousey-15,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("grünLift4");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+5,mousey-26+20);
                    ctx.lineTo(templist[0]+16,templist[1]+0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex-12+15,mousey-26+20);
                    ctx.lineTo(templist[0]+26,templist[1]+0);
                    ctx.stroke();
                }
                else Element=10;
            }
            if (Element==12){
                img = document.getElementById("grünLift10");
                ctx.drawImage(img, mousex-5,mousey-18,img.width/2 ,img.height/2 );
            }
            if (Element==13){
                img = document.getElementById("grünLift10");
                ctx.drawImage(img, mousex-5,mousey-18,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("grünLift10");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-5,mousey-15);
                    ctx.lineTo(templist[0],templist[1]+1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex+5,mousey-15);
                    ctx.lineTo(templist[0]+10,templist[1]+1);
                    ctx.stroke();
                }
                else Element=12;
            }
            if (Element==14){
                img = document.getElementById("grünLift9");
                ctx.drawImage(img, mousex-5,mousey-11,img.width/2 ,img.height/2 );
            }
            if (Element==15){
                img = document.getElementById("grünLift9");
                ctx.drawImage(img, mousex-5,mousey-11,img.width/2 ,img.height/2 );
                if (templist!=null){
                    img = document.getElementById("grünLift9");
                    ctx.drawImage(img, templist[0],templist[1],img.width/2 ,img.height/2 );
                    ctx.beginPath();
                    ctx.moveTo(mousex-5,mousey-10);
                    ctx.lineTo(templist[0],templist[1]+1);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(mousex+5,mousey-10);
                    ctx.lineTo(templist[0]+10,templist[1]+1);
                    ctx.stroke();
                }
                else Element=14;
            }
        }
        ctx.globalAlpha = 1;

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
        }


        ctx.fill();
        update();
    }

    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    var angle = 0;
    function update()
    {
        angle += 0.01;
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            //Updating X and Y coordinates
            //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
            //Every particle has its own density which can be used to make the downward movement different for each flake
            //Lets make it more random by adding in the radius
            p.y += Math.cos(angle+p.d) + 1 + p.r/2;
            p.x += Math.sin(angle) * 2;

            //Sending flakes back from the top when it exits
            //Lets make it a bit more organic and let flakes enter from the left and right also.
            if(p.x > W+5 || p.x < -5 || p.y > H)
            {
                if(i%3 > 0) //66.67% of the flakes
                {
                    particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
                }
                else
                {
                    //If the flake is exitting from the right
                    if(Math.sin(angle) > 0)
                    {
                        //Enter from the left
                        particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                    else
                    {
                        //Enter from the right
                        particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                }
            }
        }
    }

    function mouseClick(e)
    {
        var mouseX, mouseY;

        if(e.offsetX) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }
        else if(e.layerX) {
            mouseX = e.layerX;
            mouseY = e.layerY;
        }
        if (color=="gelb"){
            if (Element==1){gelbH1.push([mouseX-39,mouseY-50]);verlauf.push("gelbH1");}
            if (Element==2){gelbH2.push([mouseX-34,mouseY-40]);verlauf.push("gelbH2");}
            if (Element==3){gelbSchirm.push([mouseX-30,mouseY-43]);verlauf.push("gelbSchirm");}

            if (Element==5){gelbLift3.push([templist[0],templist[1],mouseX-12,mouseY-26,0,true]);templist=null;verlauf.push("gelbLift3");}
            if (Element==4){templist=[mouseX-12,mouseY-26];Element=5;}

            if (Element==7){gelbLift6.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("gelbLift6");}
            if (Element==6){templist=[mouseX-20,mouseY-15];Element=7;}

            if (Element==9){gelbLift8.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("gelbLift8");}
            if (Element==8){templist=[mouseX-20,mouseY-15];Element=9;}

            if (Element==11){gelbLift10.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("gelbLift10");}
            if (Element==10){templist=[mouseX-20,mouseY-15];Element=11;}

            if (Element==13){gelbLift12.push([templist[0],templist[1],mouseX-5,mouseY-18,0,true]);templist=null;verlauf.push("gelbLift12");}
            if (Element==12){templist=[mouseX-5,mouseY-18];Element=13;}

            if (Element==15){gelbLift14.push([templist[0],templist[1],mouseX-5,mouseY-11,0,true]);templist=null;verlauf.push("gelbLift14");}
            if (Element==14){templist=[mouseX-5,mouseY-11];Element=15;}


        }
        console.log(verlauf);
        if (color=="rot"){
            if (Element==1){rotH1.push([mouseX-39,mouseY-50]);verlauf.push("rotH1");}
            if (Element==2){rotH2.push([mouseX-34,mouseY-40]);verlauf.push("rotH2");}
            if (Element==3){rotSchirm.push([mouseX-30,mouseY-43]);verlauf.push("rotSchirm");}

            if (Element==5){rotLift3.push([templist[0],templist[1],mouseX-12,mouseY-26,0,true]);templist=null;verlauf.push("rotLift3");}
            if (Element==4){templist=[mouseX-12,mouseY-26];Element=5;}

            if (Element==7){rotLift6.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("rotLift6");}
            if (Element==6){templist=[mouseX-20,mouseY-15];Element=7;}

            if (Element==9){rotLift8.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("rotLift8");}
            if (Element==8){templist=[mouseX-20,mouseY-15];Element=9;}

            if (Element==11){rotLift10.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("rotLift10");}
            if (Element==10){templist=[mouseX-20,mouseY-15];Element=11;}

            if (Element==13){rotLift12.push([templist[0],templist[1],mouseX-5,mouseY-18,0,true]);templist=null;verlauf.push("rotLift12");}
            if (Element==12){templist=[mouseX-5,mouseY-18];Element=13;}

            if (Element==15){rotLift14.push([templist[0],templist[1],mouseX-5,mouseY-11,0,true]);templist=null;verlauf.push("rotLift14");}
            if (Element==14){templist=[mouseX-5,mouseY-11];Element=15;}


        }
        if (color=="blau"){
            if (Element==1){blauH1.push([mouseX-39,mouseY-50]);verlauf.push("blauH1");}
            if (Element==2){blauH2.push([mouseX-34,mouseY-40]);verlauf.push("blauH2");}
            if (Element==3){blauSchirm.push([mouseX-30,mouseY-43]);verlauf.push("blauSchirm");}

            if (Element==5){blauLift3.push([templist[0],templist[1],mouseX-12,mouseY-26,0,true]);templist=null;verlauf.push("blauLift3");}
            if (Element==4){templist=[mouseX-12,mouseY-26];Element=5;}

            if (Element==7){blauLift6.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("blauLift6");}
            if (Element==6){templist=[mouseX-20,mouseY-15];Element=7;}

            if (Element==9){blauLift8.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("blauLift8");}
            if (Element==8){templist=[mouseX-20,mouseY-15];Element=9;}

            if (Element==11){blauLift10.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("blauLift10");}
            if (Element==10){templist=[mouseX-20,mouseY-15];Element=11;}

            if (Element==13){blauLift12.push([templist[0],templist[1],mouseX-5,mouseY-18,0,true]);templist=null;verlauf.push("blauLift12");}
            if (Element==12){templist=[mouseX-5,mouseY-18];Element=13;}

            if (Element==15){blauLift14.push([templist[0],templist[1],mouseX-5,mouseY-11,0,true]);templist=null;verlauf.push("blauLift14");}
            if (Element==14){templist=[mouseX-5,mouseY-11];Element=15;}


        }
        if (color=="grün"){
            if (Element==1){grünH1.push([mouseX-39,mouseY-50]);verlauf.push("grünH1");}
            if (Element==2){grünH2.push([mouseX-34,mouseY-40]);verlauf.push("grünH2");}
            if (Element==3){grünSchirm.push([mouseX-30,mouseY-43]);verlauf.push("grünSchirm");}

            if (Element==5){grünLift3.push([templist[0],templist[1],mouseX-12,mouseY-26,0,true]);templist=null;verlauf.push("grünLift3");}
            if (Element==4){templist=[mouseX-12,mouseY-26];Element=5;}

            if (Element==7){grünLift6.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("grünLift6");}
            if (Element==6){templist=[mouseX-20,mouseY-15];Element=7;}

            if (Element==9){grünLift8.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("grünLift8");}
            if (Element==8){templist=[mouseX-20,mouseY-15];Element=9;}

            if (Element==11){grünLift10.push([templist[0],templist[1],mouseX-20,mouseY-15,0,true]);templist=null;verlauf.push("grünLift10");}
            if (Element==10){templist=[mouseX-20,mouseY-15];Element=11;}

            if (Element==13){grünLift12.push([templist[0],templist[1],mouseX-5,mouseY-18,0,true]);templist=null;verlauf.push("grünLift12");}
            if (Element==12){templist=[mouseX-5,mouseY-18];Element=13;}

            if (Element==15){grünLift14.push([templist[0],templist[1],mouseX-5,mouseY-11,0,true]);templist=null;verlauf.push("grünLift14");}
            if (Element==14){templist=[mouseX-5,mouseY-11];Element=15;}


        }


    }

    function mouseMove(e)
    {
        console.log("move");
        var mouseX, mouseY;

        if(e.offsetX) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }
        else if(e.layerX) {
            mouseX = e.layerX;
            mouseY = e.layerY;
        }
        mousex=mouseX;
        mousey=mouseY;
    }
    //animation loop
    setInterval(draw, 33);
}


function changecolor() {
    console.log("change")
}
