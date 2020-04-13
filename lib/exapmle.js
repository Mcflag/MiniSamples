'use strict';

var TableStore = require('tablestore');

var instanceName = 'my-instance';
var tableName = 'my_table';

exports.handler = function(event, context, callback) {
  console.log('event: %s', event);

  var creds = context.credentials;
  var client = new TableStore.Client({
    accessKeyId: creds.accessKeyId,
    secretAccessKey: creds.accessKeySecret,
    stsToken: creds.securityToken,
    endpoint: 'http://'+instanceName+'.cn-shanghai.ots.aliyuncs.com',
    instancename: instanceName,
  });

  // put a row and get it immediately
  var putReq = {
    tableName: tableName,
    condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
    primaryKey: [
      {'gid': 'hello'},
      {'uid': 'world'},
    ],
    attributeColumns: [
      {'col1': 'name'}, // string column
      {'col2': 100},    // integer column
    ],
  };

  client.putRow(putReq, function(err, data) {
    if (err) return callback(err);

    console.log('putRow suceess: %j', data);

    var getReq = {
      tableName: tableName,
      primaryKey: [
        {'gid': 'hello'},
        {'uid': 'world'},
      ],
      maxVersions: 2,
    };

    client.getRow(getReq, function(err, data) {
      if (err) return callback(err);

      console.log('getRow success: %j', data);

      callback(null, data);
    });
  });
};