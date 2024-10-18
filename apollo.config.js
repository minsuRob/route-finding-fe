module.exports = {
  client: {
    includes: [
      "app/**/*.{tsx,ts}",
      "hooks/**/*.{tsx,ts}",
      "components/**/*.{tsx,ts}",
    ],
    //todo: need to improve the path
    tagName: "gql",
    service: {
      name: "route-finding-be",
      url: "http://localhost:4000/graphql",
    },
  },
};
