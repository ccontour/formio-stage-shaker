# Description

This script will purge any stages that somehow got left behind when the parent project was deleted.

## How to use

Go into `src/app.service.ts`, and fill in the connection options as indicated by comments

```bash
npm install
npm start
```

If all goes correctly, it will list off all currently deleted projects. It will then flag all the attached stages as deleted also. Stages should immediately disappear from Portal UI
