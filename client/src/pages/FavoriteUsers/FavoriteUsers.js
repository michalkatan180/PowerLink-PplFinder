import React, { useEffect, useState } from "react";
import * as S from "./style";
import { setFavorite, getAllFavoriteUsers } from "../../utils/usersUtils";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
const FavoriteUsers = ({ users, isLoading }) => {


    useEffect(() => {
        getAllFavoriteUsers().then(succ => {
            if (succ.status != 400)
                setFavorites(succ.data);
        });
    }, []);

    const [favorites, setFavorites] = useState([]);

    return (
        <S.Content>
            <S.Header><Text size="36px" bold>Favorite Users</Text></S.Header>
            <S.UserList>
                <S.List>
                    {users && users.map((user, index) => {
                        if (favorites.findIndex(f => f.userId === user.login.uuid) > -1)
                            return (
                                <S.User key={index}>
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
                                        isVisible={true}
                                        onClick={() => {
                                            setFavorite(user.login.uuid).then(succ => {
                                                if (succ.status != 400) {
                                                    getAllFavoriteUsers().then(suc => { if (suc.status != 400) { setFavorites(suc.data); } });
                                                }
                                            })
                                        }}>
                                        <IconButton>
                                            <FavoriteIcon color='error' />
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
                </S.List>
            </S.UserList>
        </S.Content>
    );
};

export default FavoriteUsers;
