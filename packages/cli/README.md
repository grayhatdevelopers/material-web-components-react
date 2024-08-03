# md-cli

A CLI for adding Material components to your React apps.

## Usage

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies, configures `tailwind.config.js`, and CSS variables for the project.

```bash
npx md-cli init
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx md-ui add [component]
```

### Example

```bash
npx md-ui add button
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx md-ui add
```

## License

Licensed under the [MIT license](https://github.com/grayhatdevelopers/material-web-components-react/blob/main/LICENSE.md).
