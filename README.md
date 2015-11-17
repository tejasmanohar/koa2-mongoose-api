
# koa2-mongoose-api

api w/ email-tag bi-directional relationship

## setup

should just be

```
npm install
npm start
```

since babel and a `postinstall` script is in place for precompiling

## brief

accounts consist of email (required) + tags[] (optional)

1. POST /accounts w/ these ^above fields (just as they appear in the model)
2. GET /accounts/emails/:tag to fetch all account emails w/ given tag
3. GET /accounts/tags/:email to fetch all tags for an account w/ given email
