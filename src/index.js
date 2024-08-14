
const Response = use('Adonis/Src/Response')

Response.macro('unauthorized', function (message = 'Unauthorized') {
  this.status(401).json({
    message,
  })
})

Response.macro('notFound', function (message = 'Not Found') {
  this.status(404).json({
    message,
  })
})

Response.macro('badRequest', function (message = 'Bad request') {
  this.status(400).json({
    message,
  })
})

Response.macro('paymentRequired', function (message = 'Payment Required') {
  this.status(402).json({
    message,
  })
})

Response.macro('unprocessableEntity', function (message = 'Unprocessable Entity') {
  this.status(422).json({
    message,
  })
})

Response.macro('validateFailed', function (errorMessages, message = 'Validation failed') {
  this.status(422).json({
    message,
    errors: errorMessages,
  })
})

Response.macro('internalServerError', function (message = 'Internal server error') {
  this.status(500).json({
    message,
  })
})

Response.macro('apiCreated', function (item, message = 'Created successfully') {
  this.status(201).json({
    message,
    data: item,
  })
})

Response.macro('apiUpdated', function (item, message = 'Updated successfully') {
  this.status(202).json({
    message,
    data: item,
  })
})


Response.macro('apiDeleted', function (message = 'No content') {
  this.status(204).json({
    message,
  })
})

// response get by id
Response.macro('apiItem', function (item, message = 'Data retrieval successfully') {
  this.status(200).json({
    message,
    data: item,
  })
})

// response get all
Response.macro('apiCollection', function (items, message = 'Data retrieval successfully') {
  this.status(200).json({
    message,
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

// response pagination
Response.macro('apiPagination', function (data, message = 'Data retrieval successfully') {
  this.status(200).json({
    message: message,
    total: data.pages.total,
    page: data.pages.page,
    perPage: data.pages.perPage,
    lastPage: data.pages.lastPage,
    data: [...data.rows]
  })
})