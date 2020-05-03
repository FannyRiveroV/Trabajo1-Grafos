var filas, dato, i,t, j, col, tabla, matriz,matrizAux,matrizRes;
var aux;
let inicio=0;
let ini;
let llega;
let auxpr;
t=1;
var partede, llegaA;
partede= document.getElementById('inicioCaminos').value;
llegaA = document.getElementById('llegadaCaminos').value;
function crear()
{
  vertices = document.getElementById("cant_vertices").value;
  matriz=new Array(vertices);
  filas=vertices;
  col=filas;
  for(i=0;i<filas;i++)
  {
    matriz[i]= new Array(filas);
    for(j=0;j<filas;j++)
    {
      aux=prompt("Es adyacente el vertice["+i+"] con "+"["+j+"]   (1:sí  0:no  /por defecto=0):");
      if (aux == 1)
      {
       matriz[i][j]=1;
      }
     else
     {
      if(aux ==0)
        matriz[i][j]=0;
      else{
        alert("INGRESE UN 0 O UN 1")
        matriz[i][j]=0;
      }   
     }
    }
  }
}
function imprimirMatriz()
{
  document.getElementById("matriz").innerHTML = '';
  document.getElementById("matriz").innerHTML +="<p> Matriz Adyacencia <hr>"; 
  for(i=0;i<filas;i++){
    for(j=0;j<filas;j++){
      document.getElementById("matriz").innerHTML += matriz[i][j]+" ";
    }
    document.getElementById("matriz").innerHTML +="<br>";  
  }
}         

function conexo()
{  
  document.getElementById("contconexo").innerHTML = '';
  let inicio=0;
  const final=vertices;
  let aux=0;
  while (inicio <=final-1 )
  {
    for(i=0;i<final;i++)
    {
      for(j=0;i<final;i++)
        {
        if(i!=j)
        {
          if(matriz[i][j]!=1)
          {
            aux=1;
          }
          }
        }
      }
      inicio+=1;
    }
    document.getElementById("contconexo").innerHTML = '';
    document.getElementById("contconexo").innerHTML +="<p> Resultado <hr>"; 
    if(aux==0)
      document.getElementById("contconexo").innerHTML +="<p> Este grafo es de tipo conexo"; 
    else
      document.getElementById("contconexo").innerHTML +="<p> Este grafo es de tipo no conexo";
}

function caminos(ini,lleg)
{
  document.getElementById("caminos").innerHTML= '';
  document.getElementById("caminos").innerHTML +="<p> Ruta inicia en:"+ ini + "<br>";                                                                                               
    if ( matriz[ini][lleg] == 1 )
    {
      document.getElementById("caminos").innerHTML +="<p> Ha llegado a: "+ lleg + "<br>"; 
      return 1;
    }
    if ( matriz[ini+1][lleg] == 1 )
    {
      document.getElementById("caminos").innerHTML +="<p> Paso por:"+ (ini +1) + "vertice <br>"; 
      return (caminos(ini+1,lleg) + 1);
    }
    else{
    return caminos(ini, lleg-1);
    }
}

function caminos_2(ini,lleg)
{
    if ( matriz[ini][lleg] == 1 )
    {
        return 1;
    }
    else
    {
        if ( matriz[ini+1][lleg] == 1 )
          {
            return caminos_2(ini+1,lleg) + 1;
          }
        else{
            return caminos_2(inicio, lleg-1);
        }
    }
}

function muestraCaminos()
{
  var partede=0;
  var llegaA=0;
  var aux_p=0;
  var aux_ll=0;


  for(i=0;i<partede;i++)
  {
    aux_p = aux_p +1;

  }
  for(j=0;j<llegaA;j++)
  {
    aux_ll = aux_ll +1;

  }

  let cami= caminos(aux_p,aux_ll);
  document.getElementById("caminos").innerHTML +="<p>Cant. de nodos visitados: "+ cami; 
  console.log("cantidad de nodos por lo que pasa: " + cami);

}

function matrizCaminos()
{

  var aux_p=0;
  var aux_ll=0;
  var aux_vertices=0;
  vertices=document.getElementById("cant_vertices").value;

  for(i=0;i<vertices;i++)
  {
    aux_vertices+=1;
  }

  matrizAux = new Array(aux_vertices);
  matrizRes = new Array(aux_vertices);

  for(i=0;i<partede;i++)
  {
    aux_p = aux_p +1;
  }
  for(j=0;j<llegaA;j++)
  {
    aux_ll = aux_ll +1;
  }

 // recuperador del exponente
  var coeficiente = caminos_2(aux_ll,aux_p);
  console.log("coefiente: "+ coeficiente);

//FOR que llena la matriz resultante y auxiliar(matrizR y matrizRes2) con solo 0's
  for (i=0;i<aux_vertices;i++)
  {
      matrizAux[i]=new Array(vertices);
      matrizRes[i]=new Array(vertices);
      for(j=0;j<aux_vertices;j++)
      {
        matrizAux[i][j]=0;
        matrizRes[i][j]=0;
      }
  }

//FOR para guardar el auxliar

  for (i=0;i<aux_vertices;i++)
  {
    for(j=0;j<aux_vertices;j++)
    {
      matrizAux[i][j] = matriz[i][j];
    }
  }

  //ciclo while para potencia () ^n ; n>1
  var r=1;
  if(coeficiente==1){
    document.getElementById("matriz2").innerHTML= '';
    document.getElementById("matriz2").innerHTML+="<p> Resultado </p> <hr>"
    for(i=0;i<filas;i++){
      for(j=0;j<filas;j++){
        document.getElementById("matriz2").innerHTML += matriz[i][j]+" ";
      }
      document.getElementById("matriz2").innerHTML +="<br>";  
    }
  }
  while(r <coeficiente)
  {
    for(i=0;i<aux_vertices;i++)
    { 
      for(j=0;j<aux_vertices;j++)
      { 
        for(k=0;k<aux_vertices;k++)
        { 
          matrizRes[i][j]=matrizRes[i][j] + matrizAux[k][j]*matriz[i][k];
        } 

      }
    }
    r++;
    if(r == coeficiente){
      document.getElementById("matriz2").innerHTML= '';
      for(i=0;i<filas;i++){
        for(j=0;j<filas;j++){
          document.getElementById("matriz2").innerHTML += matriz[i][j]+" ";
        }
        document.getElementById("matriz2").innerHTML +="<br>";  
      }
    }
    for(var b=0;b<aux_vertices;b++)
    {
      for(j=0;j<aux_vertices;j++)
      {
        matrizAux[b][j]=matrizRes[b][j];
        matrizRes[b][j]=0;
      }
    }

  }
}
function prim()
{
  document.getElementById("matriz3").innerHTML= '';
  vertices = document.getElementById("cant_vertices").value;
  filas=vertices;
  col=filas;
  var matrizprim=new Array();
  matrizprim=matriz;
  var aux2;
  var p=0;
  /* la matriz del grafo anterior la ordenamos para no obtener una autoadyacencia haciendo 0 los datos 00, 11, 22*/
  for(i=0;i<filas;i++)
  {
    for(j=0;j<filas;j++){
      if(i==j){
        matriz[i][j]=0;
      }
    }
  }
  /* recorre la matriz creada y donde encuentre adyacencia (que haya un 1 en la matriz de crear()) solicita el peso de la arista */
  for(i=0;i<filas;i++)
  {
    for(j=0;j<filas;j++){
      if(matriz[i][j]=='1'){
        aux2=prompt("Ingrese el peso de arista entre los vertices ["+i+"],["+j+"] : ")
        matrizprim[i][j]=aux2;
        matrizprim[j][i]=aux2;    /* el peso se repitira para no generar una sobrecarga de pedidos ej: [0][1] va a ser la mismo que [1][0] */
      }
      else{
        matrizprim[i][j]=0;        /* si encuentra un numero distinto de 1, que en este caso es cero el valor sera 0 */
      }
    }
  }
  /* muestra la matriz con el peso de la arista entre los vertices */
  document.getElementById("matriz3").innerHTML= '';
  document.getElementById("matriz3").innerHTML += "Matriz con pesos de las aristas <br> ";
  for(i=0;i<filas;i++){
    for(j=0;j<filas;j++){
      document.getElementById("matriz3").innerHTML += matriz[i][j]+" ";
    }
    document.getElementById("matriz3").innerHTML +="<br>";  
  }
  /* obtener la arista con menor valor */
  var menor=100;
  var rec=0;
  menores=new Array();
  menores2=new Array();
  ordenar=new Array();
  conex=new Array();
  
  while(rec<3){ 
    for(i=0;i<filas;i++){
      for(j=0;j<filas;j++){
        if(matrizprim[i][j]!=0){
          menores2.push(matrizprim[i][j]);
          rec++;
        }
      }
    }
  }
  document.getElementById("matriz3").innerHTML += "Array con las aristas <br> ";
  ordenar = menores2.sort();
  /* muestra los datos de la matriz en orden de menor a menor*/
  document.getElementById("matriz3").innerHTML += " ["+ordenar+"] <br>";
  
  for(var n=0;n<(menores2.length);n++){
    var posicion=ordenar[n];
    for(i=0;i<filas;i++){
      for(j=0;j<filas;j++){
        if(matrizprim[i][j]==posicion){
          var menorx = i;  
          var menory = j;
          menores.push(menorx);  /* en esta parte se añaden las posiciones dependiendo donde esta el dato */
          menores.push(menory);
        }
      }
    }
  }
  document.getElementById("matriz3").innerHTML += " ["+menores+"] <br>";
  document.getElementById("matriz3").innerHTML += " Generacion de arbol";
  while(p<menores.length){
    if((menores[p]==menores[p+2]) || (menores[p]==menores[p+3])){
      if(menores[p+1]==menores[p+2]){
        p+=2;
      }else{
        conex.push(menores[p]);
        console.log(conex)
        conex.push(menores[p+1]);
        console.log(conex)
        p+=2;
      }
    }
    else{
      p+=2;
    }
  }
  document.getElementById("matriz3").innerHTML += " ["+conex+"] <br>";
}

function conexo2(graph)
{
  let inicio=0;
  const final=vertices;
  let aux=0;
  while (inicio <=final-1 )
  {
      for(i=0;i<final;i++)
      {
        for(j=0;i<final;i++)
        {
          if(i!=j)
          {
            if(graph[i][j]!=1)
            {
              aux=1;
            }
          }
        }
      }
      inicio+=1;
    }
    if(aux==0)
      return 1 ;  //1 si es conexo
    else
      return 0;  //0 si no es conexo

}
function grados(vertice)
{
  var aux_vertices=0;
  var contador=0;
  vertices=document.getElementById("cant_vertices").value;


  for(i=0;i<vertices;i++)
  {
    aux_vertices+=1;
  }


  for(i=0;i<aux_vertices;i++)
  {
    if(matriz[vertice][i]== 1)
      contador++;
  }
  return contador;
}


function esEuleriano( )
{
  var Grados;
  var conexion=0;
  var aux_vertices=0;
  var option=0;
  vertices=document.getElementById("cant_vertices").value;
  a=matriz;
  for(i=0;i<vertices;i++)
  {
    aux_vertices+=1;
  }

  for(j=0;j<aux_vertices;j++)
  {
    Grados=grados(j);
    console.log("grado de "+j+": "+Grados);
    if (Grados%2!= 0)
      option=1;
  }

  conexion=conexo2(a);
  console.log("conexo?: " + conexion);
  console.log("option: " + option);

  if(conexion ==1 && option==0)
  {
    document.getElementById("ceuler").innerHTML= "<p> Este grafo es de tipo euleriano";
  }
  else
  {
    document.getElementById("ceuler").innerHTML= "<p> Este grafo no es de tipo euleriano";
  }
}
function esHamiltoniano()
{
  grafo_1=matriz;
  var Grados;
  var conexion=0;
  var aux_vertices=0;
  var option=0;
  vertices=document.getElementById("cant_vertices").value;

  for(i=0;i<vertices;i++)
  {
    aux_vertices+=1;
  }

  for(j=0;j<aux_vertices;j++)
  {
    Grados=grados(j);
    console.log("grado de "+j+": "+Grados);
    if (Grados< 2)
      option=1;
  }

  conexion=conexo2(grafo_1);
  console.log("conexo?: " + conexion);
  console.log("option: " + option);

  if(conexion ==1 && option==0)
  {
    document.getElementById("hamil").innerHTML="<p> Es un grafo hamiltoniano"
  }
  if(conexion !=1 || option!=0)
  {
    document.getElementById("hamil").innerHTML="<p> No es un grafo hamiltoniano"
  }

}

