# Reduced Palette

Sometimes, an abundance of color options is a hindrance. Analysis paralysis, amirite? To this end [`css/color.css`](../css/color.css) reduces the number of stops in the expanded palette to three, save for yin (it only has two) and yang (it only has one).

If you want more granularity (read: opacity), you can call the raw version of the color (append `-raw` to the variable name) which will return the OKLCH values so you can do something like this: `oklch(var(--uchu-light-gray-raw) / 40%)`.



## Gray

![](./image/reduced/gray.png)

- `var(--uchu-light-gray)`
- `var(--uchu-gray)`
- `var(--uchu-dark-gray)`



## Red

![](./image/reduced/red.png)

- `var(--uchu-light-red)`
- `var(--uchu-red)`
- `var(--uchu-dark-red)`



## Pink

![](./image/reduced/pink.png)

- `var(--uchu-light-pink)`
- `var(--uchu-pink)`
- `var(--uchu-dark-pink)`



## Purple

![](./image/reduced/purple.png)

- `var(--uchu-light-purple)`
- `var(--uchu-purple)`
- `var(--uchu-dark-purple)`



## Blue

![](./image/reduced/blue.png)

- `var(--uchu-light-blue)`
- `var(--uchu-blue)`
- `var(--uchu-dark-blue)`



## Green

![](./image/reduced/green.png)

- `var(--uchu-light-green)`
- `var(--uchu-green)`
- `var(--uchu-dark-green)`



## Yellow

![](./image/reduced/yellow.png)

- `var(--uchu-light-yellow)`
- `var(--uchu-yellow)`
- `var(--uchu-dark-yellow)`



## Orange

![](./image/reduced/orange.png)

- `var(--uchu-light-orange)`
- `var(--uchu-orange)`
- `var(--uchu-dark-orange)`



## General

![](./image/reduced/general.png)

- `var(--uchu-light-yin)`
- `var(--uchu-yin)`
- `var(--uchu-yang)`



## Sass

If you know what Sass is, you'll know how to use [`sass/color.scss`](../sass/color.scss). I didn't provide raw versions of them because Sass comes with so many color tools (and, I've been using regular CSS variables in my Sass _anyways_).
