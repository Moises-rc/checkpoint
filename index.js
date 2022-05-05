function Aluno (nome,faltas,notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    
    
    function somarFalta(num1,num2){
     return num1 + num2;
    }
    function mediaNotas(num1,num2,num3){
      return (num1 + num2 + num3) / 3;
    }
    console.log(mediaNotas(8.1,7.9,9.5));
    console.log(somarFalta(2,1));
}
 const p1 = new Aluno('Roberto',2,[8.1,7.9,9.5]);
 const p2 = new Aluno('Ana',0,[9.7,8.6,9.3]);
 const p3 = new Aluno('Maria',5,[7.8,6.8,5.7]);
 const p4 = new Aluno('Luiza',1,[8.3,7.2,9.0]);
 
 let grupo = {
  alunos:[p1,p2,p3,p4]
    
    }

  let curso = {
  nomedoCurso:'CTD',
  notadeAprovacao:7,
  faltasmaximas:3,
  listadeEstudantes:[p1,p2,p3,p4]
}
    
let novoEstudante = new curso('Fernando',0,[7.5,9.4,6.1]);   


    
 