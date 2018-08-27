/**
 * regular exexpression for markdown syntax
 */
const filter = (target, start = 1) => {
  const t = target.slice(start, -1)
  return `%c${t}%c`
}
const formaters = [
  // ` ` code type
  {
    regexp: /`.*?`/,
    style: 'background: #eee; border-radius: 3px; padding: 2px 6px; line-height: 1.45; border: 1px solid #ddd;',
    filter: (content, target) => {
      return content.replace(target, filter(target))
    }
  },
  // _ _ bold type
  {
    regexp: /_.*?_/,
    style: 'font-weight: bolder;',
    filter: (content, target) => {
      return content.replace(target, filter(target))
    }
  },
  // * * italic type
  {
    regexp: /\*.*?\*/,
    style: 'font-style: italic;',
    filter: (content, target) => {
      return content.replace(target, filter(target))
    }
  },
  // # h1
  {
    regexp: /# .*/,
    style: 'font-size: 46px; font-weight: bold; color: #000;',
    filter: (content, target) => {
      return content.replace(target, filter(target + ' ', 2))
    }
  }
]

export default formaters
