"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getTrabajosFiltrado: async (ctx) => {
    try {
      const { query, type, full } = ctx.params;
      console.log("ENTRO");
      console.log("query", query);
      console.log("type", type.length);
      console.log("full", full);
      let arregloTrabajo = [];
      //Si solo envio query
      if (query && type == "not" && full == "not") {
        console.log("query", query);
        const resp = await strapi.models.trabajo.find();
        const newQuery = capitalizeTheFirstLetterOfEachWord(query);
        const response = await strapi.models.trabajo.find();
        const responseFiltered = response.filter((ele) => {
          const titulo = ele.titulo;
          if (titulo.includes(newQuery)) {
            return ele;
          }
        });
        console.log("response", response);
        console.log("responseFiltered", responseFiltered);
        return responseFiltered;
        //Solo envio query y type
      } else if (query && type.length > 1 && full.length <= 1) {
      } else if (query && type.length > 1 && full.length > 1) {
      }
      return [];
    } catch (error) {
      console.log("entro", error);
      throw error;
    }
  },
};
function capitalizeTheFirstLetterOfEachWord(words) {
  var separateWord = words.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}
