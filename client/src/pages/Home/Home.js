import React from "react";
import Text from "components/Text";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import UserList from "../../components/UserList/UserList";

const Home = () => {
  const { users, isLoading ,changePageNumber} = usePeopleFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="36px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} changePageNumber={changePageNumber} />
      </S.Content>
    </S.Home>);
};

export default Home;
