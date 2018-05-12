module.exports = ({
  func,
  format,
  numberOfOperands,
  allowConstants,
  allowComposites
}) => ({
  func,
  format,
  numberOfOperands: typeof numberOfOperands === 'number' ? numberOfOperands : 2,
  allowConstants: typeof allowConstants === 'boolean' ? allowConstants : true,
  allowComposites: typeof allowComposites === 'boolean' ? allowComposites : true
});
