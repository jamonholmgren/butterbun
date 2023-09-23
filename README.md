# Bluebun

Bluebun is a CLI framework inspired by [Gluegun](https://github.com/infinitered/gluegun), but specifically designed to be used with [Bun](https://bun.sh), the new JS runtime, and with a new, simpler, more straightforward API.

Bluebun has _zero_ prod dependencies and is designed to be used with Bun's built-in modules.

_Note: the name is a play on Gluegun and Bun. But we're open to other names! Please file an issue if you have ideas._

Head on over to the [Introduction](docs/introduction.md) to learn more.

## Quick Start

Bluebun has a CLI (of course) to help you get started building your own CLI.

```
# install/update bun
curl -fsSL https://bun.sh/install | bash

# use bluebun's CLI to create your new CLI
bunx bluebun new pizza # doesn't work yet!

# cd in and link it so you can run it
cd pizza
bun link
```

Bluebun will then **(EVENTUALLY -- when done!)** spin up a new CLI project for you, and you can start building your CLI right away.

Next: [Usage Guide](docs/usage-guide.md)

## License

This project is copyright 2023 Jamon Holmgren and released under the MIT license.
