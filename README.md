# Description

This script will purge any stages that are unconnected to projects, plus all related entries (to both the nonexistant project, and the stage being removed):

- forms
- roles
- submissions

If you wish to preserve any of these, you can comment out the relevant lines in `src/app.service.ts`. **Note:** this script only purges local mongo data. Please save the output of this script until you are sure the dust has settled.

## Recommendations

### Back up your database first

This script doesn't delete data, but it's a whole lot easier to restore from a backup than send emergency emails to support for assistance.

## How to use

Go into `src/app.service.ts`, and fill in the connection options as indicated by comments

```bash
npm install
npm start
```

If all goes correctly, it will list off all currently deleted projects. It will then flag all the attached stages as deleted also. Stages should immediately disappear from Portal UI
