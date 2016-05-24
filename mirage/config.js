export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('notes');
  this.get('notes/:id');
  this.post('notes', (schema, request) => {
    let params = JSON.parse(request.requestBody);

    params.created_at = new Date();

    return schema.notes.create(params);
  });
  this.patch('notes/:id');
  this.del('notes/:id');
}
