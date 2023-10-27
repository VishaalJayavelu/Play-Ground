const DEFAULT_PAGE_PAGE = 1;
const DEFAULT_PAGE_LIMIT = 0;

function getPagination(query){

     const page = Math.abs(query.page) || DEFAULT_PAGE_PAGE;
     const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;

     const skip = Math.abs((page-1)*limit);
     
     return {
          skip,
          limit,
     }
}

module.exports = {getPagination};