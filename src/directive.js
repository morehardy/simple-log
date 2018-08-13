// clear
export const clear = () => {
  return console.clear()
}

// spread
export const spread = (spread = '-') => {
  const str = 'spread'.padEnd(200, spread.toString())
  return console.log(str)
}
