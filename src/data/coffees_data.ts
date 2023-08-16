export interface CoffeeItem {
  id: string
  name: string
  description: string
  tags: string[]
  image: string
  price: number
}

export const coffeesList: CoffeeItem[] = [
  {
    id: '0',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    image: 'coffee_expresso_tradicional.svg',
    price: 8.0,
  },
  {
    id: '1',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    image: 'coffee_expresso_americano.svg',
    price: 8.5,
  },
  {
    id: '2',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    image: 'coffee_expresso_cremoso.svg',
    price: 9,
  },
  {
    id: '3',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    image: 'coffee_expresso_gelado.svg',
    price: 9,
  },
  {
    id: '4',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    image: 'coffee_cafe_com_leite.svg',
    price: 7.5,
  },
  {
    id: '5',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    image: 'coffee_latte.svg',
    price: 10.2,
  },
  {
    id: '6',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    image: 'coffee_capuccino.svg',
    price: 12,
  },
  {
    id: '7',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    image: 'coffee_macchiato.svg',
    price: 9.5,
  },
  {
    id: '8',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional'],
    image: 'coffee_mocaccino.svg',
    price: 12,
  },
  {
    id: '9',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['tradicional', 'com leite'],
    image: 'coffee_chocolate_quente.svg',
    price: 13.5,
  },
  {
    id: '10',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    image: 'coffee_cubano.svg',
    price: 14,
  },
  {
    id: '11',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    image: 'coffee_havaiano.svg',
    price: 13.9,
  },
  {
    id: '12',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    image: 'coffee_arabe.svg',
    price: 14.9,
  },
  {
    id: '13',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    image: 'coffee_irlandes.svg',
    price: 14.9,
  },
]
