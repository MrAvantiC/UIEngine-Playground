'use strict';

/**
 * Knowhow.js controller
 *
 * @description: A set of functions called "actions" for managing `Knowhow`.
 */

module.exports = {

  /**
   * Retrieve knowhow records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.knowhow.search(ctx.query);
    } else {
      return strapi.services.knowhow.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a knowhow record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.knowhow.fetch(ctx.params);
  },

  /**
   * Count knowhow records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.knowhow.count(ctx.query);
  },

  /**
   * Create a/an knowhow record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.knowhow.add(ctx.request.body);
  },

  /**
   * Update a/an knowhow record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.knowhow.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an knowhow record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.knowhow.remove(ctx.params);
  }
};
