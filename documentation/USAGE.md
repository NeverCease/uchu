# Usage

I love Deno. URL imports are cool. Anyhoo, you can do the same with uchū:

- `https://uchu.style/color.css`
- `https://uchu.style/color_expanded.css`



## Pure

If you're coding a website by hand, you probably want to use the reduced palette. Or not, whatever.

```html
<!DOCTYPE html>
<html lang="your language code">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://uchu.style/color.css" rel="stylesheet"/>

    <style lang="scss">
      body {
        background-color: var(--uchu-yang);
        color: var(--uchu-yin-9);
      }
    </style>
  </head>

  <body>
    <section>
      <p>My background is slightly off-white and my text color is a nuanced black.</p>
    </section>
  </body>
</html>
```



## Svelte/SvelteKit

If you're coding a web app, you probably want to use the expanded palette. Or not, whatever.

```svelte
<script lang="ts">
  // this example is using Svelte but probably applies to others as well
</script>

<style lang="scss">
  @import url("https://uchu.style/color_expanded.css");

  section {
    background-color: var(--uchu-yang);

    p {
      color: var(--uchu-yin-9);
    }
  }
</style>

<section>
  <p>My background is slightly off-white and my text color is a nuanced black.</p>
</section>
```
