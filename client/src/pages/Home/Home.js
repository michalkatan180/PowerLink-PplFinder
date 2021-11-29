import React, { useState } from "react";
import Text from "components/Text";
import NavBar from "../../components/NavBar/NavBar";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import UserList from "../../components/UserList/UserList";
import { useEffect } from "react";
const Home = () => {
  const { users, isLoading } = usePeopleFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="36px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} />
      </S.Content>
    </S.Home>);
};

export default Home;
