# Astro: tabler icons plugin

**NOTE:** this only packages up and supports the tabler icons outline variant.

---

## Get started

Install the package:

```sh
npm i -D @cdransf/astro-tabler-icons
```

## Usage

```astro
---
import icons from "@cdransf/astro-tabler-icons";
const { IconMenu2, IconX } = icons
---

<div set:html={IconMenu2({size: 24})}>

```

## License

[MIT](./LICENSE)
