const nota=[80,80,50,30,40,50,60];

  console.log(calculoNota(nota));

function calculoNota(nota)
{
   const media = calculoVetor(nota);

   if(media < 59) return 'F';
   if(media > 70) return 'D';
   if(media > 80) return 'C';
   if(media > 90)return  'D';
   return 'A';   
}
function calculoVetor(vetor)
{
  let sum = 0;
  for(let valor of vetor)
    sum +=valor;

  let media = sum/vetor.length;

  return media;
}