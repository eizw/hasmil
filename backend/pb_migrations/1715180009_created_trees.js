/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kyromsqlf4ed87u",
    "created": "2024-05-08 14:53:29.287Z",
    "updated": "2024-05-08 14:53:29.287Z",
    "name": "trees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lqugeg77",
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
  const collection = dao.findCollectionByNameOrId("kyromsqlf4ed87u");

  return dao.deleteCollection(collection);
})
