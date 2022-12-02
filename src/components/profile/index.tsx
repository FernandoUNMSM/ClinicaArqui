import { useContext } from "react";

import SelectModal from "components/modal/selectModal";
import UserContext from "context/userContext";
import { UserInfo } from "styles/globals/globalTables";

export default function Profile({ }) {
  const { logOut, userInfo } = useContext(UserContext)

  return (<>
    <SelectModal
      width='210px'
      buttonElement={<>
        <div className="buttonSelectOnHeader" style={{ marginRight: '0' }}>
          <UserInfo index={1}>
            <div className="letter">
              {userInfo?.nombre?.charAt(0).toUpperCase() || 'A'}
            </div>
          </UserInfo>
        </div>
      </>}
    >
      <div className="modalTitle">
        <UserInfo index={1}>
          <div className="letter">
            {userInfo?.nombre?.charAt(0).toUpperCase() || 'A'}
          </div>
          <div className="userInfo">
            <p>{`${userInfo?.nombre || 'A'} ${userInfo?.apellidoP || 'A'}`}</p>
            <p>{userInfo?.correo}</p>
          </div>
        </UserInfo>
      </div>
      <div className="optionItem" onClick={logOut}>
        Log Out
      </div>
    </SelectModal>
  </>)
}