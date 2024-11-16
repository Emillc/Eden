---
title: picgo-core config
description: No Description
author: chillcicada
pubDate: 2024-11-16
draft: true
tags:
  - others
---

A example config for picgo-core user.

```json
{
  "picBed": {
    "uploader": "lankong",
    "lankong": {
      "lskyProVersion": "V2",
      "server": "<Your Domain>",
      "token": "<Your Token>",
      "strategyId": null,
      "albumId": null,
      "permission": "private(default)",
      "ignoreCertErr": false,
      "syncDelete": true
    }
  },
  "picgoPlugins": {
    "picgo-plugin-lankong": true
  }
}
```

Remember to run `npm install <Your Plugin>` to install the plugin (here is the `picgo-plugin-lankong`), the picgo-core will load the `node_modules` automatically.

Use the following command to generate the token:

```bash
 curl --location --request POST 'https://<Your Domain>/api/v1/tokens' \
--form 'email="<Your Email>"' \
--form 'password="<Your Password>"'
```

> [!TIP]
> add the space before the command to avoid the command to be saved in the history.
