import { meQuery } from "@/app/__generated__/meQuery";
import { isLoggedInVar } from "@/constants/apollo/apollo";
import { gql, useQuery, useReactiveVar } from "@apollo/client";

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      reach
      height
      follower
      followering
      instaId
      startedAt
      isAllowAuth
    }
  }
`;

export const useMe = () => {
  // const hasToken = useReactiveVar(isLoggedInVar);
  return useQuery<meQuery>(ME_QUERY);
  // return useQuery<meQuery>(ME_QUERY);

  // const { data } = useQuery<simpleMeQuery>(SIMPLE_ME_QUERY, {
  //   skip: !hasToken,
  // });
  // useEffect(() => {
  //   if (data?.me === null) {
  //     logout();
  //   }
  // }, [data]);
  // return { data };
};
