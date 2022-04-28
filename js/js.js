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
    var valor = document.getElementById(id);
    var res = valor;
    mostra(res);
}

//função de criptografar
function crip(id){
    var i=0;
    var result ="";
    var txt = document.getElementById(id).value;
    var array = txt.split('');
    
    while(i < txt.length){
        switch (array[i]){
            case "a":
                array[i]="ai";
                break;
        }
        switch (array[i]){
            case "e":
                array[i]="enter";
                break;
        }
        switch (array[i]){
            case "i":
                array[i]="imes";
                break;
        }
        switch (array[i]){
            case "o":
                array[i]="ober";
                break;
        }
        switch (array[i]){
            case "u":
                array[i]="ufat";
                break;
        }
        result = result + array[i];
        i++;
    }
    
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



console.log();