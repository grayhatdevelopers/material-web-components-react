# Why another React Material library?

Let's evaluate our options.

## Libraries which implement Material 2

These are libraries which were built upon an older specification of Google's official Material Web Components, but those followed the Material 2 specification. Such libraries are either discontinued, or slowly dying out. Those include, but are not limited to:

- material-tailwind (currently looks like the best!): https://github.com/creativetimofficial/material-tailwind
- material-web-components-react (Official): https://github.com/material-components/material-components-web-react
- react-mdc: https://react-mdc.github.io/#/
- muicss: https://www.muicss.com/

Check out more libraries listed at https://m2.material.io/develop/web/guides/framework-wrappers .

## Libraries which implement Material 3

These are libraries which implement Material 3, the latest specification (so far) from the Material Design team. Some look great, others... not really. These include, but are not limited to:

- beercss (insane work, totally framework independent. I should consider using this): https://www.beercss.com/
- actifyjs (currently looks like the best React-only implementation!): https://actifyjs.com/

I'd love to add more. Send in a Pull Request if you'd like to contribute more.

## Popular, but slow

[MUI](https://mui.com/) is the library which fits this category. While I love their work, [they are slow](https://github.com/mui/material-ui/issues/29345) at keeping up with latest design philosophies and practices (And rightly so! A lot of software depends on their stability). MUI has announced better Material 3 support in Q4 of 2024. Too far away, at least for when this project started!

For MUI, and similar libraries, I recommend using them alongside this library to "fill in" the missing parts.

## The future: Web Components!

The library we use under the hood, [@material/web](https://github.com/material-components/material-web) fits here. Web Components are the future, we must accept it. But while we build towards that future, it's obvious that current applications must be maintained. Hence the existence of this library. Our aim would be to keep this library synced with this underlying new technology as much as possible, so when we transition, it's seamless!

Another great library to plug in here would be: https://www.mdui.org/en/docs/2/
