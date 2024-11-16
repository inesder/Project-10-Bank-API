import {useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { userProfile, updateUserProfile } from '../features/user/userActions';

function ProfilePage(){
    const { userInfos } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(userInfos.firstName);
    const [lastName, setLastName] = useState(userInfos.lastName);
    console.log(firstName);

    useEffect(() => {
        dispatch(userProfile());
    }, [dispatch]);


    const handleEditClick = () => {
      setIsEditing(true);
    };

    const handleCancel = () => {
      setIsEditing(false);
    }

    const handleSave = () => {
      dispatch(updateUserProfile({firstName, lastName}));
      setIsEditing(false);
    }


    return(
    <main className="main bg-dark">
    <div className="header">
    <h1>Welcome back <br/>{userInfos.firstName} {userInfos.lastName}</h1>
    {!isEditing && (
        <button onClick={handleEditClick} className="edit-button">Edit Name</button>
      )}
    {isEditing ? (
        <div >
          <div className="input-container">
          <input
            className="edit-input"
            type="text"
            placeholder="Name"
            onChange={(e)=> setFirstName(e.target.value) }
          />
          <input
            className="edit-input"
            type="text"
            placeholder="Lastname"
            onChange={(e)=> setLastName(e.target.value) }
          />
          </div>
          <div className="edit-button-container"> 
          <button className="update-button" onClick={handleSave} >Save</button>
          <button className="update-button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        null
      )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
)
}

export default ProfilePage
