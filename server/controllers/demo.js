const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var data="lll"
 
 const re = await mysql('cAuth').table('cSessionInfo').select('uuid')

  ctx.state.data = {
    msg: re
  }
}