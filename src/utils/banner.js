import chalk from 'chalk';
import { config } from '../config.js';

const getSystemStatus = () => {
  const items = [
    ['System Time', new Date().toLocaleString()],
    ['Environment', process.env.NODE_ENV || 'development'],
    ['Node Version', process.version],
    ['Platform', process.platform],
  ];

  return items.map(([key, value]) => 
    `${chalk.gray('├')} ${chalk.yellow(key.padEnd(15, ' '))} ${chalk.white(value)}`
  ).join('\n');
};

export const getBanner = () => {
  const mainBanner = chalk.cyan(`
 ▄▄▄▄    ▓█████  ███▄    █  ▄▄▄██▀▀▀▄▄▄       ███▄ ▄███▓ ██▓ ███▄    █ 
▓█████▄  ▓█   ▀  ██ ▀█   █    ▒██  ▒████▄    ▓██▒▀█▀ ██▒▓██▒ ██ ▀█   █ 
▒██▒ ▄██ ▒███   ▓██  ▀█ ██▒   ░██  ▒██  ▀█▄  ▓██    ▓██░▒██▒▓██  ▀█ ██▒
▒██░█▀   ▒▓█  ▄ ▓██▒  ▐▌██▒▓██▄██▓ ░██▄▄▄▄██ ▒██    ▒██ ░██░▓██▒  ▐▌██▒
░▓█  ▀█▓ ░▒████▒▒██░   ▓██░ ▓███▒   ▓█   ▓██▒▒██▒   ░██▒░██░▒██░   ▓██░
░▒▓███▀▒ ░░ ▒░ ░░ ▒░   ▒ ▒  ▒▓▒▒░   ▒▒   ▓▒█░░ ▒░   ░  ░░▓  ░ ▒░   ▒ ▒ 
▒░▒   ░   ░ ░  ░░ ░░   ░ ▒░ ▒ ░▒░    ▒   ▒▒ ░░  ░      ░ ▒ ░░ ░░   ░ ▒░
 ░    ░     ░      ░   ░ ░  ░ ░ ░    ░   ▒   ░      ░    ▒ ░   ░   ░ ░ 
 ░          ░  ░         ░  ░   ░        ░  ░       ░    ░           ░ 
      ░                                                                   
`);

  const title = `${chalk.yellow.bold('ON IP')} ${chalk.gray('Twitter Bot By FlexxRichie')} ${chalk.blue('v1.1.0')} ${chalk.white('t.me/airdrop3arn')}`;
  const separator = chalk.cyan('━'.repeat(process.stdout.columns));

  const configInfo = `
${chalk.gray('┌')} ${chalk.white.bold('Bot Configuration')}
${chalk.gray('├')} ${chalk.yellow('Max Daily Posts:'.padEnd(15, ' '))} ${chalk.white(config.maxDailyPosts)}
${chalk.gray('├')} ${chalk.yellow('Post Interval:'.padEnd(15, ' '))} ${chalk.white(`${config.postingIntervals.min / 1000 / 60}-${config.postingIntervals.max / 1000 / 60} minutes`)}
${chalk.gray('├')} ${chalk.yellow('Character Limit:'.padEnd(15, ' '))} ${chalk.white(config.characterLimit)}
${chalk.gray('└')} ${chalk.yellow('Required Tags:'.padEnd(15, ' '))} ${chalk.white(config.tags.required.join(', '))}`;

  const systemInfo = `
${chalk.gray('┌')} ${chalk.white.bold('System Information')}
${getSystemStatus()}
${chalk.gray('└')} ${chalk.yellow('Status:'.padEnd(15, ' '))} ${chalk.green('●')} ${chalk.white('Online')}`;

  return `${mainBanner}\n${title}\n${separator}\n${configInfo}\n${systemInfo}\n${separator}\n`;
};
