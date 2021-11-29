import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import { setFavorite, getAllFavoriteUsers } from "../../utils/usersUtils";
import Infinite from 'react-infinite'
const UserList = ({ users, isLoading }) => {

  const handleMouseEnter = (index) => { setHoveredUserId(index); };
  const [hoveredUserId, setHoveredUserId] = useState();
  const handleMouseLeave = () => { setHoveredUserId(); };

  const [usersArray, setUsersArray] = useState(null);//The people who will see them
  const [filters, setFilters] = useState([]);//The countries that the people from these countries, we will represent
  const [favoriteUsers, setFavoriteUsers] = useState([])//The favorite people, to have a pink heart

  useEffect(() => {
    setUsersArray(users);
    getAllFavoriteUsers().then(succ => {
      if (succ.status != 400) setFavoriteUsers(succ.data);
    });
  }, [])

  const handleFilters = (country) => {

    let tmp = filters;
    if (event.target.checked) tmp.push(country);
    else tmp.splice(tmp.indexOf(country), 1);
    setFilters(tmp);

    if (filters.length == 0) {
      setUsersArray(users);
      return;
    }

    let arr = [];
    for (var i = 0; i < users.length; i++) {
      let c = users[i].location.country;
      if (filters.indexOf(c) > -1) arr.push(users[i]);
    }
    setUsersArray(arr);

  }

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox onChange={() => handleFilters("Brazil")} value="BR" id="Brazil" label="Brazil" />
        <CheckBox onChange={() => handleFilters("Australia")} value="AU" id="Australia" label="Australia" />
        <CheckBox onChange={() => handleFilters("Canada")} value="CA" id="Canada" label="Canada" />
        <CheckBox onChange={() => handleFilters("Germany")} value="DE" id="Germany" label="Germany" />
        <CheckBox onChange={() => handleFilters("Turkey")} value="EU" id="Germany" label="Turkey" />
      </S.Filters>

      <Infinite containerHeight={450} elementHeight={180}>

        {usersArray && usersArray.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                isVisible={favoriteUsers.findIndex(f => f.userId === user.login.uuid) > -1 || index === hoveredUserId}
                onClick={() => {
                  setFavorite(user.login.uuid).then(succ => {
                    if (succ.status != 400) {
                      getAllFavoriteUsers().then(suc => { if (suc.status != 400) { setFavoriteUsers(suc.data); } });
                    }
                  })
                }}>
                <IconButton>
                  <FavoriteIcon color={favoriteUsers.findIndex(f => f.userId === user.login.uuid) === -1 ? '' : 'error'} />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}

        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}

      </Infinite>


    </S.UserList>
  );
};

export default UserList;