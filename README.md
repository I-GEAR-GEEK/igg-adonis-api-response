# IGG Adonis standard response format

## Installation

```
adonis install igg-adonis-api-response

# for yarn users
adonis install igg-adonis-api-response --yarn
```
## Registering provider

Make sure to register the soft deletes provider inside `start/app.js`

```js
const providers = [
  'igg-adonis-api-response/providers/ExtendResponseProvider'
]
```

## Use



```js
Route.get('/response', ({ response }) => response.apiSuccess('some message'))
```

## Function

```js
  unauthorized(errorMessages)
  validateFailed(errorMessages)
  internalServerError(errorMessages)
  notFound(errorMessages)
  apiCreated(item, meta)
  apiUpdated(item, meta)
  apiDeleted(item, meta)
  apiItem(item, meta) // response get by id
  apiCollection(items, meta) // response get all
  apiSuccess(data, meta, message)// response normal
```

