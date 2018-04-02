/**
 * 数据存取方法以纯函数形式编写
 *
 * 这个纯函数接受2个参数
 * 1 params 调用参数。
 * 2 ctx 请求上下文信息。
 *
 * @param params
 * @param ctx
 * @returns {Promise.<*>}
 */
async function getThemeSections({theme}, ctx) {
  const packages = await ctx.servers.theme.get(`/themes/${theme}/package.json`)
  return packages.sections
}

async function loadSectionTemplate({theme, section}, ctx) {
  return ctx.servers.theme.get(`/themes/${theme}/components/${section.name}.html`)
}

export default {
  getThemeSections,
  loadSectionTemplate,
}
