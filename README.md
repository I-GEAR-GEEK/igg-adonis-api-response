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
  unauthorized()
  notFound()
  validateFailed(errorMessages = [])
  internalServerError()
  apiCreated(item)
  apiUpdated(item)
  apiDeleted()
  apiItem(item) // response get by id
  apiCollection(items) // response get all
  apiSuccess(message = 'Success', data = null)// response normal
```

