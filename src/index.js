
const Response = use('Adonis/Src/Response')

Response.macro('unauthorized', function () {
  this.status(401).json({
    message: 'Unauthorized',
  })
})

Response.macro('notFound', function () {
  this.status(404).json({
    message: 'Not Found',
  })
})

Response.macro('validateFailed', function (errorMessages) {
  this.status(422).json({
    message: 'Validation failed',
    errors: errorMessages,
  })
})

Response.macro('internalServerError', function () {
  this.status(500).json({
    message: 'Internal server error',
  })
})

Response.macro('apiCreated', function (item) {
  this.status(201).json({
    message: 'Created successfully',
    data: item,
  })
})

Response.macro('apiUpdated', function (item) {
  this.status(202).json({
    message: 'Updated successfully',
    data: item,
  })
})


Response.macro('apiDeleted', function () {
  this.status(204).json({
    message: 'No content',
  })
})

// response get by id
Response.macro('apiItem', function (item) {
  this.status(200).json({
    message: 'Data retrieval successfully',
    data: item,
  })
})

// response get all
Response.macro('apiCollection', function (items) {
  this.status(200).json({
    message: 'Data retrieval successfully',
    data: items,
  })
})

// response normal
Response.macro('apiSuccess', function (message = 'Success', data = null) {
  this.status(200).json({
    message: message,
    data,
  })
})