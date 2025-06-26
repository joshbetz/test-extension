module.exports = function (cb) {
  console.log(process.version);
  cb(null, [`${process.version}`, `${require('os').hostname()}`);
}
