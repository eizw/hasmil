/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukgy6a7o7fesua6")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  // remove
  collection.schema.removeField("h9hzr2oz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a9lubmpu",
    "name": "tree",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kyromsqlf4ed87u",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukgy6a7o7fesua6")

  collection.listRule = "user = @request.auth.id"
  collection.viewRule = "user = @request.auth.id"
  collection.createRule = "user = @request.auth.id"
  collection.updateRule = "user = @request.auth.id"
  collection.deleteRule = "user = @request.auth.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h9hzr2oz",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("a9lubmpu")

  return dao.saveCollection(collection)
})
