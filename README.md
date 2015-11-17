
# koa2-mongoose-api

api w/ email-tag bi-directional relationship

## setup

should just be

```
npm install
# set MONGO_URI env var in your shell
npm start
```

pretty sure anything about node 0.10.x? will work since this uses babel
... but you should be on 4+ anyways since it's LTS now :)

## brief

accounts consist of _email_ (required) + _tags[]_ (optional)

1. POST /accounts to upsert (if exists, update. if not, create.) accounts
2. GET /accounts/emails/:tag to fetch all account emails w/ given tag
3. GET /accounts/tags/:email to fetch all tags for an account w/ given email
