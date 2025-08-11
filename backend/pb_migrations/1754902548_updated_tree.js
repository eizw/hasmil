/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyromsqlf4ed87u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vu9npr6y",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyromsqlf4ed87u")

  // remove
  collection.schema.removeField("vu9npr6y")

  return dao.saveCollection(collection)
})
