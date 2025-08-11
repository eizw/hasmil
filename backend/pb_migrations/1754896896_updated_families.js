/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukgy6a7o7fesua6")

  collection.name = "family"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukgy6a7o7fesua6")

  collection.name = "families"

  return dao.saveCollection(collection)
})
