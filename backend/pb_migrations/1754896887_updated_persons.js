/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5gt8erxewvw01h2")

  collection.name = "person"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5gt8erxewvw01h2")

  collection.name = "persons"

  return dao.saveCollection(collection)
})
