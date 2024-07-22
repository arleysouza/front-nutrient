import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header, Error, PopupMessage, TableUser } from "../components";
import { useUser } from "../hooks";

export default function UserRolePage() {
  const { error, users, getUsers, updateRole, setError } = useUser();
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");

  useEffect(() => {
    getUsers(); //obtém os usuários cadastrados
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateRole = async (id: string, role: string) => {
    if (id && role) {
      setError(null);
      const response = await updateRole(id, role);
      if (response) {
        setMessagePopup("Perfil atualizado com sucesso");
        setShowPopup(true);
      }
    } else {
      setError({ error: "Forneça o perfil" });
    }
  };

  return (
    <Wrapper>
      <Header />
      {error && <Error>{error.error}</Error>}
      {showPopup && (
        <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />
      )}
      <BodySld>
        {users && users.length > 0 && (
          <TableUser users={users} onProfileChange={handleUpdateRole} />
        )}
      </BodySld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodySld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
