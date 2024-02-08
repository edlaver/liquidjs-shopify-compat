# liquidjs-shopify-compat

<p align="center">
    <img alt="license" src="https://img.shields.io/github/license/edlaver/liquidjs-shopify-compat?style=flat-square" />
    <img alt="release" src="https://img.shields.io/github/v/tag/edlaver/liquidjs-shopify-compat?label=release&style=flat-square" />
    <img alt="visits" src="https://hits.deltapapa.io/github/edlaver/liquidjs-shopify-compat.svg" />
</p>

This is an attempt to bring most of the Shopify specific Liquid filters and tags to the [LiquidJS](https://liquidjs.com/) library. This is a work in progress and not all filters and tags will be available yet.

## Currently implemented:

- [ ] Filters:

  - [x] money:
    - [x] `money`
    - [x] `money_with_currency`
    - [x] `money_without_currency`
    - [x] `money_without_trailing_zeros`

- [ ] Tags:

## Getting started

First, let's install all dependencies:

```bash
pnpm i
```

When you're ready to build and use your new `npm` package, run:

```bash
pnpm build
```

### Why `pnpm` and not `npm` or `yarn`?

This minimalist template is meant to be easily migrated to monorepo frameworks, such as `turbo` (Turborepo) and `nx` (Nx). Thus, it is why files like the `tsconfig.json` is simple.

### What is configured in this template?

We're using `vite-plugin-dts`, which is a useful `vite` plugin, to automatically generate & produce the `index.d.ts` file in the `dist`. Awesome!

Next, we're by default using `istanbul` code coverage integration with `vitest` - it's purely optional to use it, as the template can be reconfigured to `coverage-c8` (or new `c8` name if it is renamed again in near future).

### Since this template is considered minimalist, what's missing that would make this template better?

As a start `prettier` and `eslint` configurations have been left out, because I'd leave these configurations up to you - as they're not that difficult to configure. And of course, you may have a more complex configuration of `prettier` / `biomejs` and `eslint` and more, for your projects - such as for `turbo` (turborepo) or `nx` (NX).

> Bonus tip: If you want to easily manage your dependencies' versioning, check out `taze` (https://github.com/antfu/taze). `taze` is awesome, and so far it works well in a `nx` monorepo that I've been working on. There are useful commands like `pnpm up` / `pnpm up --latest` etc, or monorepo features that assist dependency management - so keep an eye out for new features, commands, packages in the near future!

## Testing

### Unit testing with `vitest`

Run `vitest` (without "watch" mode):

```bash
pnpm test
```

Or run `vitest` with code coverage report:

```bash
pnpm test:coverage
```

### Local testing only

Run below command in your new `npm` package repository. For example, `cd /var/www/my-awesome-package` then run:

```bash
pnpm link --global
```

Lastly, go to your desired application that will use your new `npm` package and run:

```bash
pnpm link /var/www/my-awesome-package
```

## Publishing

### NPM

And when ready to publish to `npm`:

```bash
npm login
npm publish
```

## References

Created from awesome Vite template: https://github.com/entwurfhaus/vite-vanilla-ts-template

The list of online references & to credit the open-source community, for making mini projects like these possible, **helping developers save many minutes** working.

1. Peter Mekhaeil | How to build an npx starter template - https://github.com/petermekhaeil/create-my-template
2. Netlify | Creating a TypeScript Package with Vite - https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/
3. Jason Stuges | Github - https://github.com/jasonsturges/vite-typescript-npm-package
