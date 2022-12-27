const cliente = {
  nome: "André",
  idade: 32,
  cpf: "1122334455",
  email: "andre@dominio.com",
};

//usa-se o operador "." para poder chamar um valor da chave do objeto
console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`
);

console.log(
  `Os três primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`
);
