const cliente = {
  nome: "André",
  idade: 32,
  cpf: "1122334455",
  email: "andre@dominio.com",
};

//usa-se o operador "." para poder chamar um valor da chave do objeto
console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
  console.log(`A chave tem valor ${chave} tem valor ${cliente[chave]}`);
});
