/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5gt8erxewvw01h2")

  collection.name = "persons"

  // remove
  collection.schema.removeField("oslyjzkg")

  // remove
  collection.schema.removeField("e5rxds3r")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5gt8erxewvw01h2")

  collection.name = "people"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oslyjzkg",
    "name": "childof",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ukgy6a7o7fesua6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e5rxds3r",
    "name": "parentof",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ukgy6a7o7fesua6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
