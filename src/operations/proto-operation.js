module.exports = function(constructorOptions){
  return {
    func: constructorOptions.func,
    format: constructorOptions.format,
    numberOfOperands: constructorOptions.hasOwnProperty('numberOfOperands') ? constructorOptions.numberOfOperands : 2,
    allowConstants: constructorOptions.hasOwnProperty('allowConstants') ? constructorOptions.allowConstants : true,
    allowComposites: constructorOptions.hasOwnProperty('allowComposites') ? constructorOptions.allowComposites : true
  }
}
