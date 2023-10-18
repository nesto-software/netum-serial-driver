# Netum QR-Scanner Service

This is a systemd service which receives the scan results from a netum device and opens a browser or performs another action like emulating keystrokes on scan.

## Hardware

[Netum C750](https://www.amazon.de/gp/product/B0855MQ9Y6/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)

## Install

### NixOS

`nix run github:nesto-software/netum-serial-driver`

TODO: add nixos configuration for systemd unit

### Manual (From Source)
- Install git and check this repo out
- Install nodejs, npm/yarn, firefox, default-jdk
- Install node-gyp
- Install a graphical environment
- Install dependencies for this repository: `yarn` OR `npm install`
- Install udev rules: `mv 90-custom.rules /etc/udev/rules.d/90-custom.rules && udevadm control --reload-rules && udevadm trigger`
- Install systemd service unit: `mv netum.service $HOME/.config/systemd/user/netum.service && systemctl start --user netum.service && systemctl enable --user netum.service`
