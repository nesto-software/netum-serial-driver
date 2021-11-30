# Netum Inventory System based on PartBolt

- Buy: [Netum C750](https://www.amazon.de/gp/product/B0855MQ9Y6/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1)
- Install nodejs and npm/yarn
- Install dependencies for this repository: `yarn` OR `npm install`
- Install udev rules: `mv 90-custom.rules /etc/udev/rules.d/90-custom.rules && udevadm control --reload-rules && udevadm trigger`
- Install systemd service unit: `mv netum.service $HOME/.config/systemd/user/netum.service && systemctl start --user netum.service && systemctl enable --user netum.service`
- Boot into Raspbian and auto-start this project via nodejs
- Create QR-Codes for [PartBolt](https://partbolt.com/) using [qrcodemonkey](https://www.qrcode-monkey.com/)
- Use glabels to design the part labels
- Use Brother QL-700 to print the labels

Simplest inventory system of the world!

Please note: The QR codes must all end with the character '#', as we use it as delimiter for the browser action. This delimiter choice is fine in our case because PartBolt does not use URL fragments.
