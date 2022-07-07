let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

// retorno implicito chamndo return direto usado bastantes em funcao que faz 1 coisa so
dobro = (a) => 2 * a;
console.log(dobro(Math.PI));

let ola = function () {
  return "Ola";
};

ola = () => "Ola";
ola = (_) => "Ola";
console.log(ola());
