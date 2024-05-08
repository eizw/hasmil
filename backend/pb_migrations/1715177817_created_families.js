/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ukgy6a7o7fesua6",
    "created": "2024-05-08 14:16:57.136Z",
    "updated": "2024-05-08 14:16:57.136Z",
    "name": "families",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ukgy6a7o7fesua6");

  return dao.deleteCollection(collection);
})
