function requireFields(body, fields) {
  for (const field of fields) {
    if (!body[field]) {
      return {msg: `Missing field: ${field}`};
    }
  }
}

module.exports = { requireFields };