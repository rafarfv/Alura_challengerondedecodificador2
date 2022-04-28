// mostra o valor dentro do div que é passado por parametro
function mostra(res){
    if(res==""){
        document.getElementById("result").innerHTML="";
        document.getElementById("img").innerHTML="<img src='img/1.png'>";
    }else{
        document.getElementById("result").innerHTML="<textarea class='textarea' id='res'></textarea>";
        document.getElementById("img").innerHTML="";
        document.getElementById("res").innerHTML=res;
    }
}

//funcao de decriptografar
function descrip(id){
    //recebe o valor do elemento
    var txt = document.getElementById(id).value;
    //realiza a substituições na sring, txt
    txt = txt.replace(/ai/g, "a");
    txt = txt.replace(/enter/g, "e");
    txt =  txt.replace(/imes/g, "i");
    txt = txt.replace(/ober/g, "o");
    txt = txt.replace(/ufat/g, "u");
    //chama a função mostra
    mostra(txt);
    }

//função de criptografar
function crip(id){
    var i=0;
    var result ="";
    var txt = document.getElementById(id).value;
    var array = txt.split('');
    //examina toda a string e fas a substituições
    while(i < txt.length){
        switch (array[i]){
            case "a":
                array[i]="ai";
                break;
            case "e":
                array[i]="enter";
                break;
            case "i":
                array[i]="imes";
                break;
            case "o":
                array[i]="ober";
                break;
            case "u":
                array[i]="ufat";
                break;
        }
        //concate os resultados
        result = result + array[i];
        i++;
    }
    //chama função mostra
    mostra(result);
}

//funcao de copiar as informações dentro da div res
function copiar(){
    document.getElementById("botao_exe").addEventListener("click",
        function(){
            document.getElementById("res").select();
            document.execCommand('copy');
        }
    );
}
