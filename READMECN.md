# Slog

## 一个简单的调试插件,帮助你更好地调试程序

### 主要功能

- 快速生成图片
- 支持部分markdown语法
- 快速创建group
- 生成表格
- 快速生成分割线

#### img
```js
slog.img([url, imgKey], scale)
```
| 参数 | 类型 | 描述 |
| --- | ---- | ---- |
| url | string | 图片地址 |
| imgKey | string | 内置图片,详情请点击 |
| scale   | number  | 图片比率 |


> 使用内置图片
```js
eg:
slog.img('watermelon')
```
> 可用图片参数

| 参数         | 类型     | 样式                                       |
| ---------- | ------ | ------|
| watermelon | string | <img src="https://github.com/morehardy/simple-log/blob/master/images/watermelon.png?raw=true" width="20%"> |
| apple | string | <img src="https://github.com/morehardy/simple-log/blob/master/images/apple.png?raw=true" width="20%"> |
| accessory | string | <img src="https://github.com/morehardy/simple-log/blob/master/images/accessory.png?raw=true" width="20%"> |
| cherry | string | <img src="https://github.com/morehardy/simple-log/blob/master/images/cherry.png?raw=true" width="20%"> |
| heart | string | <img src="https://github.com/morehardy/simple-log/blob/master/images/heart.png?raw=true" width="20%"> |
| pen | string | <img src="https://github.com/morehardy/simple-log/blob/master/images/pen.png?raw=true" width="20%"> |
| pitaya | string | <img src="https://github.com/morehardy/simple-log/blob/master/images/pitaya.png?raw=true" width="20%"> |
| tomato | string | <img src="https://github.com/morehardy/simple-log/blob/master/images/watermelon.png?raw=true" width="20%"> |

> 使用自定义图片

```js
slog.img(url)

eg:
slog.img('http://ms2.ctjh.ntpc.edu.tw/~luti/99-2/pivot/004-1.gif')
```

#### markdown

```js
slog.log(text)

eg:
slog.log('# h1 on the line')
```

> 支持的markdown语法

```
# : 生成标题

``: 代码块样式

_ _: 文字加粗

* *: 文字倾斜
```

#### 生成group

> 将部分console信息集中为一个群组

```js
slog.group(fn)

eg:
slog.group(() => {
  slog.log('# start')
  slog.img('http://ms2.ctjh.ntpc.edu.tw/~luti/99-2/pivot/004-1.gif')
  slog.log('see *italic*')
  slog.spread('-')
  slog.log('# the end')
})
```
