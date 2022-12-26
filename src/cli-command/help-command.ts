import { CliCommandInterface } from './cli-command.interface';
import chalk from 'chalk';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
        ${chalk.bold('Программа для подготовки данных для REST API сервера.')}
        ${chalk.bold('Пример:')}
            ${chalk.redBright('main.js')} ${chalk.yellow('--<command>')} ${chalk.green('[--arguments]')}
        ${chalk.bold('Команды:')}
            ${chalk.yellow('--version')}:                   # выводит номер версии
            ${chalk.yellow('--help')}:                      # печатает этот текст
            ${chalk.yellow('--import')} ${chalk.green('<path>')}:             # импортирует данные из TSV
            ${chalk.yellow('--generate')} ${chalk.green('<n> <path> <url>')}  # генерирует произвольное количество тестовых данных
        `);
  }
}
