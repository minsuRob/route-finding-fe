module.exports = {
  client: {
    includes: ["./**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "route-finding-be",
      url: "http://localhost:4000/graphql",
    },
  },
};
