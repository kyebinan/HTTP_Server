#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
/*
minuscule() retourne quand on entre une lettre majuscule une lettre minuscule
sinon elle renvoie la lettre minuscule entrée
*/

char* minuscule(char* car){
  char* c=malloc(2);
  if(strcmp(car,"A")==0){
    strcpy(c,"a");
    return c;}
  if(strcmp(car,"B")==0){
    strcpy(c,"b");
    return c;}

  if(strcmp(car,"C")==0){
    strcpy(c,"c");
    return c;}


  if(strcmp(car,"D")==0){
    strcpy(c,"d");
    return c;}

  if(strcmp(car,"E")==0){
    strcpy(c,"e");
    return c;}


  if(strcmp(car,"F")==0){
    strcpy(c,"f");
    return c;}


    if(strcmp(car,"G")==0){
      strcpy(c,"g");
      return c;}
    if(strcmp(car,"H")==0){
      strcpy(c,"h");
      return c;}

    if(strcmp(car,"I")==0){
      strcpy(c,"i");
      return c;}


    if(strcmp(car,"J")==0){
      strcpy(c,"j");
      return c;}

    if(strcmp(car,"K")==0){
      strcpy(c,"k");
      return c;}


    if(strcmp(car,"L")==0){
      strcpy(c,"l");
      return c;}



      if(strcmp(car,"M")==0){
        strcpy(c,"m");
        return c;}
      if(strcmp(car,"N")==0){
        strcpy(c,"n");
        return c;}

      if(strcmp(car,"O")==0){
        strcpy(c,"o");
        return c;}


      if(strcmp(car,"P")==0){
        strcpy(c,"p");
        return c;}

      if(strcmp(car,"Q")==0){
        strcpy(c,"q");
        return c;}


      if(strcmp(car,"R")==0){
        strcpy(c,"r");
        return c;}

        if(strcmp(car,"T")==0){
          strcpy(c,"t");
          return c;}
        if(strcmp(car,"U")==0){
          strcpy(c,"u");
          return c;}

        if(strcmp(car,"V")==0){
          strcpy(c,"v");
          return c;}


        if(strcmp(car,"W")==0){
          strcpy(c,"w");
          return c;}

        if(strcmp(car,"X")==0){
          strcpy(c,"x");
          return c;}


        if(strcmp(car,"Y")==0){
          strcpy(c,"y");
          return c;}

        if(strcmp(car,"Z")==0){
          strcpy(c,"z");
          return c;}
  else{
    return car;
  }
}
/*
norm1 permet de traduire tous les % en caractère correspondant
*/

char* norm1(char* s){
  int cpt=0;//initialisation de l'indice
  int i;
  char *tmp=malloc(2);
  char *new=malloc(strlen(s));
  char *str=malloc(strlen(s));

  while(cpt<strlen(s)){
    strncpy(str,s+cpt,3);


    if(strcmp(str,"%2D")==0 || strcmp(str,"%2d")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"-");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%41")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"A");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%42")==0){
      //on a trouver un caracrère spéciale


      strcpy(tmp,"B");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%43")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"C");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%44")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"D");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%45")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"E");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%46")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"F");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%47")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"G");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%48")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"H");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%49")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"I");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%4A")==0 || strcmp(str,"%2a")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"J");
      strcat(new,tmp);
      cpt+=3;
    }


    if(strcmp(str,"%4B")==0 || strcmp(str,"%2b")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"K");
      strcat(new,tmp);
      cpt+=3;
    }



    if(strcmp(str,"%4C")==0 || strcmp(str,"%4c")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"L");
      strcat(new,tmp);
      cpt+=3;
    }



    if(strcmp(str,"%4D")==0 || strcmp(str,"%4d")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"M");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%4E")==0 || strcmp(str,"%4e")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"N");
      strcat(new,tmp);
      cpt+=3;
    }


    if(strcmp(str,"%4F")==0 || strcmp(str,"%4f")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"O");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%50")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"P");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%51")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"Q");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%52")==0){
      //on a trouver un caracrère spéciale


      strcpy(tmp,"R");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%53")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"S");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%54")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"T");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%55")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"U");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%56")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"V");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%57")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"W");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%58")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"X");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%59")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"Y");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%5A")==0 || strcmp(str,"%5a")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"Z");
      strcat(new,tmp);
      cpt+=3;
    }
    if(strcmp(str,"%61")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"a");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%62")==0){
      //on a trouver un caracrère spéciale


      strcpy(tmp,"b");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%63")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"c");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%64")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"d");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%65")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"e");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%66")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"f");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%67")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"g");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%68")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"h");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%69")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"i");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%6A")==0 || strcmp(str,"%6a")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"j");
      strcat(new,tmp);
      cpt+=3;
    }


    if(strcmp(str,"%6B")==0 || strcmp(str,"%6b")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"k");
      strcat(new,tmp);
      cpt+=3;
    }



    if(strcmp(str,"%6C")==0 || strcmp(str,"%6c")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"l");
      strcat(new,tmp);
      cpt+=3;
    }



    if(strcmp(str,"%6D")==0 || strcmp(str,"%6d")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"m");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%6E")==0 || strcmp(str,"%6e")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"n");
      strcat(new,tmp);
      cpt+=3;
    }


    if(strcmp(str,"%6F")==0 || strcmp(str,"%6f")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"o");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%70")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"p");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%71")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"q");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%72")==0){
      //on a trouver un caracrère spéciale


      strcpy(tmp,"r");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%73")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"s");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%74")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"t");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%75")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"u");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%76")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"v");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%77")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"w");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%78")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"x");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%79")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"y");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%7A")==0 || strcmp(str,"%7a")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"z");
      strcat(new,tmp);
      cpt+=3;
    }


    if(strcmp(str,"%30")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"0");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%31")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"1");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%32")==0){
      //on a trouver un caracrère spéciale


      strcpy(tmp,"2");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%33")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"3");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%34")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"4");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%35")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"5");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%36")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"6");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%37")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"7");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%38")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"8");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%39")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"9");
      strcat(new,tmp);
      cpt+=3;
    }

    if(strcmp(str,"%5F")==0 || strcmp(str,"%5f")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"_");
      strcat(new,tmp);
      cpt+=3;
    }


    if(strcmp(str,"%2E")==0 || strcmp(str,"%2e")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,".");
      strcat(new,tmp);
      cpt+=3;
    }



    if(strcmp(str,"%7E")==0 || strcmp(str,"%7e")==0){
      //on a trouver un caracrère spéciale
      strcpy(tmp,"~");
      strcat(new,tmp);
      cpt+=3;
    }





    else{
      strncpy(tmp,s+cpt,1);
      strcat(new,tmp);
      cpt+=1;
    }


  }


  return new;


}

/*
norm2 permet d'aapliquer les règles suivantes:
-le champ scheme et host sont en minuscule
-si path est vide on met /
-sinon on supprime les . et .. dans path
-on enlève le port
*/
char* norm2(char* s){
  int cpt=0;
  int i;
  char *tmp=malloc(2);
  char *tmpp=malloc(4);
  char *new=malloc(strlen(s));
  char *neww=malloc(strlen(s));
  int cptt;
  int j;
  strncpy(tmp,s+cpt,1);

    //rend minuscule


  while (strcmp(tmp,":")!=0){ //champ scheme

    //rend minuscule

    strcat(new,minuscule(tmp));
    cpt=cpt+1;
    strncpy(tmp,s+cpt,1);

  }
  strcat(new,tmp);
  cpt=cpt+1;
  strncpy(tmpp,s+cpt,2);

  if (strcmp(tmpp,"//")==0){//verifie host
    strncpy(tmp,s+cpt,1);
    strcat(new,tmp);
    cpt=cpt+1;
    strncpy(tmp,s+cpt,1);
    strcat(new,tmp);
    cpt=cpt+1;

    cptt=cpt;
    while (strcmp(tmp,"@")!=0 && cpt<strlen(s)){//si il y a le champ userinfo
      //strcat(new,tmp);
      cpt=cpt+1;
      strncpy(tmp,s+cpt,1);
    }
    if (cpt==strlen(s)){// si pas de champ userinfo
      cpt=cptt;

    }
    else{//champ userinfo
      for(i=cptt;i<cpt+1;i++){
        strncpy(tmp,s+i,1);
        strcat(new,tmp);
      }
      cpt=i;
    }


    //on est au niveau du champ host


      //rend minuscule
    strncpy(tmp,s+cpt,1);
    while (strcmp(tmp,":")!=0 && strcmp(tmp,"/")!=0 && cpt<strlen(s)){ //champ host
      //rend minuscule
      strcat(new,minuscule(tmp));
      i=i+1;
      cpt=cpt+1;
      strncpy(tmp,s+cpt,1);
    }

    if(strcmp(tmp,":")==0){//dans le cas où on a un champ port
      cpt=cpt+1;
      strncpy(tmp,s+cpt,1);
      while(strcmp(tmp,"/")!=0 && cpt<strlen(s) && strcmp(tmp,"?")!=0 && strcmp(tmp,"#")!=0){
        //on enlève le champ port
        cpt=cpt+1;
        strncpy(tmp,s+cpt,1);
      }
    }



    //champ path
    if(cpt==strlen(s) || strcmp(tmp,"?")==0 || strcmp(tmp,"#")==0){//pas de champ path
      //strcat(new,tmp);
      strcpy(tmp,"/");
      strcat(new,tmp);
    }

    if(cpt<strlen(s)){
      strncpy(tmpp,s+cpt,2);
      while(cpt<strlen(s)){
        if(strcmp(tmpp,"./")==0){ //enlève les .

          cpt=cpt+2;
        }
        if(strcmp(tmpp,"..")==0){ //enlève les ..

          neww=malloc(strlen(s));
          for (i=0;i<strlen(new)-1;i++){
              strncpy(tmp,new+i,1);
              strcat(neww,tmp);
          }
          strcpy(new,neww);
          i=0;
          strncpy(tmp,new+strlen(new)-1-i,1);
          neww=malloc(strlen(s));


          while(strcmp(tmp,"/")!=0){ //on repère où est le dernier /
            strncpy(tmp,new+strlen(new)-1-i,1);
            i=i+1;
          }

          i=strlen(new)-i+1;
          neww=malloc(strlen(s));
          for(j=0;j<i;j++){
            strncpy(tmp,new+j,1);

            strcat(neww,tmp);
          }


          strcpy(new,neww);



          cpt=cpt+3;

        }
        else{

          strncpy(tmp,s+cpt,1);
          strcat(new,tmp);
          cpt=cpt+1;
        }


        strncpy(tmpp,s+cpt,2);

      }

    }




  }


  else{ //pas de champ authority

    //champ path
    strncpy(tmpp,s+cpt,2);
    while(cpt<strlen(s)){
      if(strcmp(tmpp,"./")==0){ //enlève les .

        cpt=cpt+2;
      }
      if(strcmp(tmpp,"..")==0){ //enlève les ..

        neww=malloc(strlen(s));
        for (i=0;i<strlen(new)-1;i++){
            strncpy(tmp,new+i,1);
            strcat(neww,tmp);
        }
        strcpy(new,neww);
        i=0;
        strncpy(tmp,new+strlen(new)-1-i,1);
        neww=malloc(strlen(s));


        while(strcmp(tmp,"/")!=0){ //on repère où est le dernier /
          strncpy(tmp,new+strlen(new)-1-i,1);
          i=i+1;
        }

        i=strlen(new)-i+1;
        neww=malloc(strlen(s));
        for(j=0;j<i;j++){
          strncpy(tmp,new+j,1);

          strcat(neww,tmp);
        }


        strcpy(new,neww);



        cpt=cpt+3;

      }
      else{

        strncpy(tmp,s+cpt,1);
        strcat(new,tmp);
        cpt=cpt+1;
      }


      strncpy(tmpp,s+cpt,2);

    }
  }
  return new;

}

/*
normalisation normalise url
*/

char* normalisation(char* url){
  char* tmp=malloc(strlen(url));
  tmp=norm1(url);
  char* norm=malloc(strlen(tmp));
  norm=norm2(tmp);
    return norm;
}



/*

int main(){

//test regle 1
  int i;
  char* test1="http://127.0.0.1:8080";
  char* test2="HTTp://EXAmple.COm/Foo/./test/../tp?query#fragment";
  char* test3="HTTp://User@exaMple.COM:80";

  char* norma1=normalisation(test1);
  char* norma2=normalisation(test2);
  char* norma3=normalisation(test3);

  printf("normalized url is %s\n", norma1);
  return 1;
  int q;
  int p;
  q=strlen(test1);
  for(i=0;i<q;i++){
    printf("%c",*test1);
    test1++;
  }

  p=strlen(norma1);
  printf("\n normalisation\n");
  for(i=0;i<p;i++){
    printf("%c",*norma1);
    norma1++;
  }
  printf("\n");
  printf("\n");


  q=strlen(test2);
  for(i=0;i<q;i++){
    printf("%c",*test2);
    test2++;
  }
  p=strlen(norma2);
  printf("\n normalisation\n");
  for(i=0;i<p;i++){
    printf("%c",*norma2);
    norma2++;
  }
  printf("\n");
  printf("\n");

  q=strlen(test3);
  for(i=0;i<q;i++){
    printf("%c",*test3);
    test3++;
  }
  p=strlen(norma3);
  printf("\n normalisation\n");
  for(i=0;i<p;i++){
    printf("%c",*norma3);
    norma3++;
  }
  printf("\n");
  printf("\n");
}

*/
