/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyromsqlf4ed87u")

  collection.name = "tree"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyromsqlf4ed87u")

  collection.name = "trees"

  return dao.saveCollection(collection)
})
