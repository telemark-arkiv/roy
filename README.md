[![Build Status](https://travis-ci.org/telemark/roy.svg?branch=master)](https://travis-ci.org/telemark/roy)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# roy

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/roy.svg)](https://greenkeeper.io/)

Din mann for levering av dokumenter

## Innhold

- [Beskrivelse](docs/description.md)
- [Regler](docs/rules.md)

## Docker
Build

```sh
$ docker build -t tfk-roy .
```

### Usage
```sh
$ docker run --env-file=docker.env --volume=/test/data/jobs:/src/test/data/jobs --rm tfk-roy
```

This will start a container. Do the job. Stop the container and remove it.
