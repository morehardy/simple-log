import iconKeys from './icon'

// clear
export const clear = () => {
  return console.clear()
}

// spread
export const spread = (spread = '-', num = 200) => {
  const str = 'spread'.padEnd(num + 6, spread.toString())
  return console.log(str)
}

// img
export const img = key => {
  // constructor
  const creatImg = url => {
    console.log('%c ', `padding:50px;background:url(${url}); background-repeat: no-repeat; background-size: contain; background-position: center;`)
  }
  iconKeys[key] ? creatImg(iconKeys[key]) : creatImg(key)
}
