# How to Run an Avail Light Client

![Avail light-client node](https://api.prolinkmoon.com/avail-light-client-node.png)

## Latest release

You can find the latest release binary in the `avail-light` repository.
| Repository | Release Latest version |
|-----------------|----------------|
| [avail-light](https://github.com/availproject/avail-light) | [Latest](https://github.com/availproject/avail-light/releases/latest) |

This guide outlines how to set up an Avail light client :

- [Build from source](#run-on-an-existing-network-build-from-source) /or
- [Download light-client executable latest version](#run-on-an-existing-network-donwload-latest-version)

## Run on an Existing Network | Build from source

You can build the light client directly from source.

**1. Installation**

```bash
git clone https://github.com/availproject/avail-light.git
cd avail-light
cargo build --release
```

The resulting `avail-light` binary in the `target/release` directory.

**2. Run the light client with existing network ( eg: Avail Testnet `goldberg`) & following pre-defined configuration file:**

```bash
./target/release/avail-light --network goldberg
```

**3. If you want to supply your own configuration file (see [reference](https://github.com/availproject/avail-light?tab=readme-ov-file#configuration-reference)), & use following command:**

```bash
./target/release/avail-light --config config.yaml --network goldberg
```

That's it 🎉! You have successfully run the light client and connected to a public network. The light client should show output similar to the following:

## Run on an Existing Network | Donwload latest version

In this example, you will download the light client and connect to an existing public network.

1. Download Avail light client latest version | for exmaple: we use linux ubuntu amd64.

```bash
wget https://github.com/availproject/avail-light/releases/latest/download/avail-light-linux-amd64.tar.gz
```

2. unzip file and make it executable | then delete file .tar.gz

```bash
tar -xf avail-light-linux-amd64.tar.gz
chmod +x avail-light-linux-amd64
rm -rf avail-light-linux-amd64.tar.gz
```

3. Run light client use following command:

```bash
./avail-light-linux-amd64 --network goldberg
```

## Next Steps

### Run a Full Node

Consider running a full node by following the deployment guide [here.](fullnode.md)

### Run a Relay node ..
