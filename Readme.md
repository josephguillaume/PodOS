# PodOS - An operating system for your personal online datastore

![CI](https://github.com/pod-os/PodOS/actions/workflows/ci-cd.yml/badge.svg)

* [PodOS core](./core)
* [PodOS elements](./elements)
* [Documentation](./docs)

## Run locally

First install:

```shell
npm ci
```

Start up elements and a development solid server by running:

```shell
npm run dev:core
npm run dev:elements
npm run dev:server
```

Visit http://localhost:3333/?uri=http%3A%2F%2Flocalhost%3A3000%2Falice%2Fgames%2Fminecraft%23it to view the demo app
showing example data, or change the uri parameter to a resource of your choice.

The development Solid server is running at http://localhost:3000/ 

* [Development Solid Server](./dev-solid-server)
* [Test Data](./dev-solid-server/data)
* [Test Users](./dev-solid-server/Readme.md#Users)


## Contributing

You want to contribute? Great! Take a look into our [contributing guide](./CONTRIBUTING.md)