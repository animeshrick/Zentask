function requireFields(body, fields) {
  for (const field of fields) {
    if (!body[field]) {
      throw new Error(`Missing field: ${field}`);
    }
  }
}

module.exports = { requireFields };