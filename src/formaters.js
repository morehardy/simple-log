/**
 * regular exexpression for markdown syntax
 */
const filter = target => {
  const t = target.slice(1, -1)
  return `%c${t}%c`
}
const formaters = [
  // ` ` code type
  {
    regexp: /`.*?`/,
    style: 'background: #eee; border-radius: 3px; padding: 2px 6px; line-height: 1.45;',
    filter: (content, target) => {
      return content.replace(target, filter(target))
    }
  },
  // _ _ bold type
  {
    regexp: /_.*?_/,
    style: 'font-weight: bold;',
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
  }
]

export default formaters
