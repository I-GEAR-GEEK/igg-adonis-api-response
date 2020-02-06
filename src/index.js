
const Response = use('Adonis/Src/Response')

Response.macro('unauthorized', function (errorMessages) {
  this.status(401).json({
    status: 401,
    code: 'E_UNAUTHORIZED_FAILED',
    message: 'unauthorized',
    errors: errorMessages,
  })
})

Response.macro('validateFailed', function (errorMessages) {
  this.status(422).json({
    status: 422,
    code: 'E_VALIDATE_FAILED',
    message: 'Validation failed',
    errors: errorMessages,
  })
})

Response.macro('internalServerError', function (errorMessages) {
  this.status(500).json({
    status: 500,
    code: 'E_INTERNAL_SERVER_ERROR',
    message: 'Internal server error',
    errors: errorMessages,
  })
})

Response.macro('notFound', function (errorMessages) {
  this.status(404).json({
    status: 404,
    code: 'E_NOT_FOUND',
    message: 'Not Found Data',
    errors: errorMessages,
  })
})

Response.macro('apiCreated', function (item, meta) {
  this.status(201).json({
    status: 201,
    message: 'Created successfully',
    data: item,
    meta,
  })
})

Response.macro('apiUpdated', function (item, meta) {
  this.status(202).json({
    status: 202,
    message: 'Updated successfully',
    data: item,
    meta,
  })
})

Response.macro('apiDeleted', function (item, meta) {
  this.status(202).json({
    status: 202,
    message: 'Deleted successfully',
    data: null,
    meta,
  })
})

// response get by id
Response.macro('apiItem', function (item, meta) {
  this.status(200).json({
    status: 200,
    message: 'Data retrieval successfully',
    data: item,
    meta,
  })
})

// response get all
Response.macro('apiCollection', function (items, meta) {
  this.status(200).json({
    status: 200,
    message: 'Data retrieval successfully',
    data: items,
    meta,
  })
})

// response normal
Response.macro('apiSuccess', function (data, meta, message) {
  this.status(200).json({
    status: 200,
    message: message || 'Success',
    data,
    meta,
  })
})
