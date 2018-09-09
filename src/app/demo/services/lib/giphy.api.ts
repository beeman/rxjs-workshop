const apiUrl = 'https://api.giphy.com/v1';

const randomUrl = '/gifs/random';
const searchUrl = '/gifs/search';

// Get your API key at https://developers.giphy.com/
const getDefaultParams = () => ({
  api_key: 'o74HCFsYEWiR8u0cWdQgqPMGxKPMWfyz',
  // api_key: 'BwMr6MMmjiQDMMqoMcwbQWLQvxc7pTUw',
  rating: 'g',
  lang: 'en',
});

/**
 * Merge the default and optional parameters into an array of strings with 'key=value' pairs
 * @param optional
 */
const getParams = (optional: any) => {
  const searchOptions = {
    ...getDefaultParams(),
    ...optional,
  };

  return Object.keys(searchOptions)
    .reduce((acc, curr) => [...acc, `${curr}=${searchOptions[curr]}`], []);
};

export const randomImageUrl = () => {
  return `${apiUrl}${randomUrl}?${getParams({}).join('&')}`;
};

export const imageSearchUrl = (q: string, limit: number = 10, offset: number = 0) => {
  return `${apiUrl}${searchUrl}?${getParams({
    q: q,
    limit: limit,
    offset: offset,
  }).join('&')}`;
};
