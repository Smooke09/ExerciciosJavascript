const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito entre paradigmas: funcional e 00

// metodo bind e o metodo para amarrar a execucao(siginifica que sempre que chama a funcao  e referencia o this )
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
