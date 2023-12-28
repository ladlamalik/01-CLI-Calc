#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

function welcomMessage() {
  let animation = chalkAnimation.karaoke(`
  Let do Some Calculations Using CLI
  _____________________
 |  _________________  |
 | | Nadeem Calc 0.  | |
 | |_________________| |
 |  ___ ___ ___   ___  |
 | | 7 | 8 | 9 | | + | |
 | |___|___|___| |___| |
 | | 4 | 5 | 6 | | - | |
 | |___|___|___| |___| |
 | | 1 | 2 | 3 | | x | |
 | |___|___|___| |___| |
 | | . | 0 | = | | / | |
 | |___|___|___| |___| |
 |_____________________|

  `);
  setTimeout(() => {
    animation.stop();
    askQuesiton();
  }, 3000);
}

function addition(num1: number, num2: number): void {
  console.log(chalk.bgGreen(`--> ${num1} + ${num2} = ${num1 + num2}`));
}
function substraction(num1: number, num2: number): void {
  console.log(chalk.bgGreen(`--> ${num1} - ${num2} = ${num1 - num2}`));
}
function multiplicaiton(num1: number, num2: number): void {
  console.log(chalk.bgGreen(`--> ${num1} x ${num2} = ${num1 * num2}`));
}
function division(num1: number, num2: number): void {
  console.log(chalk.bgGreen(`--> ${num1} / ${num2} = ${num1 / num2}`));
}
function power(num1: number, num2: number): void {
  console.log(chalk.bgGreen(`--> ${num1} ^ ${num2} = ${num1 ** num2}`));
}

async function askQuesiton() {
  const choices: string[] = [
    '+ Addition',
    '- Substraction',
    'x Multiplication',
    '/ Division',
    '^ Power',
    '> Exit',
  ];
  while (true) {
    const operator = await inquirer.prompt([
      {
        name: 'SelectedOperator',
        type: 'list',
        message: 'Which Opeation you want to perform?;',
        choices: choices,
      },
    ]);
    if (operator.SelectedOperator === choices[5]) {
      let endingAnimaiton = chalkAnimation.karaoke(
        `Thank you for using Magic Calculator`
      );
      setTimeout(() => {
        endingAnimaiton.stop();
      }, 3000);
      break;
    } else {
      const input = await inquirer.prompt([
        {
          type: 'number',
          name: 'number1',
          message: chalk.hex('#e0b609')(`Enter First Number 1 : `),
        },
        {
          type: 'number',
          name: 'number2',
          message: chalk.hex('#e0b609')(`Enter First Number 2 : `),
        },
      ]);
      if (!isNaN(input.number1) || !isNaN(input.number2))
      // {
      //   console.log(chalk.bgRed(`Please enter a Valid Number`));
      // }
        switch (operator.SelectedOperator) {
          case '+ Addition':
            addition(input.number1, input.number2);
            break;
          case '- Substraction':
            substraction(input.number1, input.number2);
            break;
          case 'x Multiplication':
            multiplicaiton(input.number1, input.number2);
            break;
          case '/ Division':
            division(input.number1, input.number2);
            break;
          case '^ Power':
            power(input.number1, input.number2);
            break;

            default:
              console.log(`No Such Operator`);
              break;
        }
    }
  }
}

welcomMessage();
