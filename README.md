# Projeto de RPG com Programação Orientada a Objetos (POO)

## Descrição
Este projeto é uma implementação de um sistema de RPG utilizando Programação Orientada a Objetos (POO). O objetivo principal foi colocar em prática os conceitos de POO, criando diferentes classes de heróis e inimigos com habilidades específicas.

## Estrutura do Projeto
O projeto contém as seguintes classes:
- **Caracter:** Classe base que define as propriedades e métodos comuns a todos os personagens.
- **Assassin:** Herói que pode atacar inimigos com base em um valor de dado.
- **Cleric:** Herói que possui habilidades de cura e buff/debuff, mas não pode atacar.
- **Mage:** Herói que ataca inimigos utilizando diferentes tipos de feitiços.
- **Warrior:** Herói que pode alternar entre modo de ataque e defesa.
- **Goblin:** Inimigo com propriedades básicas de vida, ataque e defesa.
- **Orc:** Subclasse de Goblin com valores aumentados de vida, ataque e defesa.
- **Troll:** Subclasse de Goblin com valores ainda mais altos de vida, ataque e defesa.

## Funcionalidades
Cada classe de herói e inimigo possui métodos específicos:
- **Assassin:** 
  - `attackEnemy(enemy)`: Ataca o inimigo com base no valor de um dado de 6 lados (d6).
- **Cleric:**
  - `healAlly(ally)`: Cura um aliado com base na fé e no valor de um dado de 30 lados (d30).
  - `debuffDefense(enemy)`: Reduz a defesa de um inimigo.
  - `increasseAttack(ally)`: Aumenta o ataque de um aliado.
  - `debuffAttack(enemy)`: Reduz o ataque de um inimigo.
- **Mage:**
  - `attackEnemy(enemy)`: Ataca o inimigo utilizando diferentes feitiços, cada um com bônus específico.
- **Warrior:**
  - `changeMode()`: Alterna entre modo de ataque e defesa.
  - `attackEnemy(enemy)`: Ataca o inimigo apenas se estiver em modo de ataque.
- **Goblin, Orc e Troll:**
  - Métodos para calcular vida, ataque e defesa com base no nível.
