/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5gt8erxewvw01h2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aa5ihc4z",
    "name": "childOf",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ukgy6a7o7fesua6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dbgl2f5g",
    "name": "parentOf",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ukgy6a7o7fesua6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5gt8erxewvw01h2")

  // remove
  collection.schema.removeField("aa5ihc4z")

  // remove
  collection.schema.removeField("dbgl2f5g")

  return dao.saveCollection(collection)
})
