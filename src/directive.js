import iconKeys from './icon'
import formaters from './formaters'

// clear before of this line
export const clear = () => {
  return console.clear()
}

/**
 * spread symbol to split context
 * @param {*} spread spread symbol
 * @param {*} num symbol num
 */
export const spread = (spread = '-', num = 200) => {
  const str = 'spread'.padEnd(num + 6, spread.toString())
  return console.log(str)
}

/**
 * show img
 * @param {string} key : url or icon key
 * @param {?} data : debug data
 * @param {number} scale : image scale
 * icon default scale is 0.2
 */
export const img = (key, data, scale) => {
  // constructor
  const creatImg = (url, data, scale) => {
    const node = document.createElement('img')
    node.src = url
    node.onload = function () {
      const width = node.width / 2 * scale
      const height = node.height / 2 * scale
      debugger
      console.log('%c ', `padding:${height}px ${width}px;background:url(${url}); background-repeat: no-repeat; background-size: contain; background-position: center;`, data)
    }
  }
  iconKeys[key] ? creatImg(iconKeys[key], data, 0.2) : creatImg(key, data)
}

/* eslint-disable */
/**
 * @param {fn} callback: do something
 */
export const group = callback => {
  console.group()
  const wait = () => {
    try {
      if (typeof callback === 'function') {
        callback()
        return Promise.resolve()
      } else {
        throw 'callback is not a function'
      }
    } catch (err) {
      // console.log(err)
      return Promise.reject(err)
    }
  }
  wait().then(() => {
    console.groupEnd()
  }).catch(err => {
    console.warn(err)
  })
}
/* eslint-able */

export const table = data => {
  const filter = data => {
    for (let i in data) {
      if (typeof data[i] !== 'string') {
        data[i] = JSON.stringify(data[i])
      }
    }
    return data
  }
  console.table(filter(data))
}


export const log = content => {
  formaters.forEach(obj => {
    // console.log(content)
    // console.log(obj.regexp.test(content))
    if (obj.regexp.test(content)) {
      const newContent = obj.filter(content , content.match(obj.regexp)[0])
      console.log(newContent, obj.style, '')
    }
  })
}

log('哈哈哈`发大水发`')
log('code `this => cosnole()`')
log(`粗体_bold_`)
log('粗体*bold*')
log('#hdhdhh3213123123123213213123123123123123fdsf')
log('##hdhdhh3213123123123213213123123123123123fdsf')
