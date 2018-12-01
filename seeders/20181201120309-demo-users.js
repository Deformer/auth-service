

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('users', [
    {
      name: 'Sergey Belan',
      login: 'serg1',
      passwordHash: '6a8f0a2376eaadeb8d9ad02915659f8d2fc5ff17fd830cc1eb7ee99348cc346f97f895342da602b1ec66faa8311949157bc5368f6e830afaac21031f0c11a4b7',
      passwordSalt: 'f312c92c134f3fbc',
    },
    {
      name: 'Peter Onion',
      login: 'peton',
      passwordHash: '2a4198761435b62562344def84a54e888ae6f4fc4494314b17c1f75bb8471b477df32518abb3e78c2bbf7283d035f4f681ab49b40d13bb0302f4427df0624b5d',
      passwordSalt: '4d1f388acc035363',
    },
    {
      name: 'John Grey',
      login: 'johng',
      passwordHash: 'ee5936b1b8267f5570ff94f0ee14fdf708150c5ccb92d733063314796c698633bf3e6e0e503d5e24418650a4cdaad872686548fd936d3927d34c48777114307f',
      passwordSalt: 'abd601975d8c122b',
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
