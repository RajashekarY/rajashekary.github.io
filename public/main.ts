import { renderMarkdown } from 'https://raw.githubusercontent.com/littletof/terminal_markdown/master/mod.ts';

const md = Deno.readTextFileSync(/Public/intro.md);
console.log(renderMarkdown(md));