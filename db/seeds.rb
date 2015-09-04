# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

List.create [
  {title: 'sneakers', category: 'shoes', price: 12.33, sex: 'male'},
  {title: 'boots', category: 'shoes', price: 32.23, sex: 'female'},
  {title: 'tennis racket', category: 'sports', price: 79.93}
]