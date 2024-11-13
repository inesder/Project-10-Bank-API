import {useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userProfile } from '../features/user/userActions';


function ProfilePage(){
    const { userInfos, loading, error } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userProfile());
    }, [dispatch]);

    return(
    <h1>my profile {userInfos ? userInfos.firstName : "Loading..."}</h1>
)
}

export default ProfilePage
