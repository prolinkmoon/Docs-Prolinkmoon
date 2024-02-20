# Dusk ITN-node | Running Guide

![Dusk](https://api.prolinkmoon.com/dusk.png)

## Recomended hardware Requirement

| CPU   | Memory | Storage        | Network   | Operating System(OS)  |
| ----- | ------ | -------------- | --------- | --------------------- |
| 4vCPU | 4GB    | 250GB SSD/NVMe | 100Mbps + | Ubuntu 22.04(LTS) x64 |

## Preparation

- Join [Dusk Discord]() to get faucet access. _\*To run a node need 1000 tDUSK which you can get from the faucet and/or as a reflection of your staked ERC20 DUSK._
- For more detail / information See official [ANN Dusk ITN-node](https://dusk.network/news/ITN-set-up/)

## Let's Get Started

### Rusk Installation

```bash
curl --proto '=https' --tlsv1.2 -sSfL https://github.com/dusk-network/itn-installer/releases/download/v0.1.1/itn-installer.sh | sudo sh
```

after installation complete. next configre your ITN-node

### Configure Rusk

Once everything has been set up, you will be asked to add your consensus keys. These keys are used to sign and vote for blocks.

If you haven’t made a wallet yet, go to our [Web Wallet](https://wallet.dusk.network/setup/) and create a new wallet. You can request funds from our faucet here. The faucet will give you 1100 tDUSK. The minimum to stake is 1000 tDUSK.

###### #Once you have access to a Dusk mnemonic, run the following command:

```bash
rusk-wallet restore
```

If your node is not running, it will tell you `some operations won't be available.` This is fine, and happens due to your node not being online yet. You can still continue to follow the steps below.

You will be asked to provide your recovery phrase/mnemonic, **in lowercase,** and to enter a password for the wallet.

```bash
rusk-wallet export -d /opt/dusk/conf -n consensus.keys
```

You will be asked to set an encryption password for the consensus key. Remember it and run the following script to set it as an environment variable:

```bash
sh /opt/dusk/bin/setup_consensus_pwd.sh
```

###### If you’ve configured everything correctly, you can now start rusk:

```bash
service rusk start
```

_this command will run your node & doesn't return anything_

\#You can check (log) if it indeed is by running:

```bash
grep "block accepted" /var/log/rusk.log
```

It is best to wait until your node is synced up. You can find the latest block height on [our explorer](https://explorer.dusk.network/).

## Stake tDUSK

###### The final step is to stake. You can stake by running:

```bash
rusk-wallet stake --amt 1000 # Or however much you want to stake
```

Once the transaction has gone through, you can view your staking information by running:

```bash
rusk-wallet stake-info
```

To see if your node is participating in consensus and creating blocks, occasionally check:

```bash
grep "execute_state_transition" /var/log/rusk.log | tail -n 5
```

Note that this can take a while, given that your stake needs at least 2 epochs, or 4320 blocks, to mature. Your stake, relative to the total stake, also plays a factor.

If everything went right, and your node starts accepting and creating blocks, you have succesfully set up your ITN node!

## Congrat..!! well done 😁
