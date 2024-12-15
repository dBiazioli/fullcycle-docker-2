const first_names = [
  "Lucas",
  "Matheus",
  "Pedro",
  "João",
  "Maria",
  "Ana",
  "Paulo",
  "Carlos",
  "Rafael",
  "Mariana",
];
const last_names = [
  "Silva",
  "Santos",
  "Oliveira",
  "Souza",
  "Pereira",
  "Carvalho",
  "Ferreira",
  "Rodrigues",
  "Almeida",
  "Nascimento",
];

const randomName = () => {
  const first = first_names[Math.floor(Math.random() * first_names.length)];
  const last = last_names[Math.floor(Math.random() * last_names.length)];
  return `${first} ${last}`;
};

module.exports = { randomName };
