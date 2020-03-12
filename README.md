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
  unauthorized(message = 'Unauthorized')
  notFound(message = 'Not Found')
  badRequest(message = 'Bad request')
  unprocessableEntity(message = 'Unprocessable Entity')
  validateFailed(errorMessages = [], message = 'Validation failed')
  internalServerError(message = 'Internal server error')
  apiCreated(item, message = 'Created successfully')
  apiUpdated(item, message = 'Updated successfully')
  apiDeleted(message = 'No content')
  apiItem(item, message = 'Data retrieval successfully') // response get by id
  apiCollection(items, message = 'Data retrieval successfully') // response get all
  apiSuccess(message = 'Success', data = null)// response normal
  apiPagination(data, message = 'Data retrieval successfully')
```

