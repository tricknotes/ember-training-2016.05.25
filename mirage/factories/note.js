import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.name.title,
  body:  faker.lorem.text
});
