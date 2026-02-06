/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kvtvytntrdp6zq2");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "kvtvytntrdp6zq2",
    "created": "2026-02-06 10:03:53.864Z",
    "updated": "2026-02-06 10:03:53.864Z",
    "name": "parentRelation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pkwsx0qo",
        "name": "personId",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "5gt8erxewvw01h2",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "zv0ehk38",
        "name": "familyId",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
