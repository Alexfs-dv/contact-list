import { useState } from "react";
import AddContactIcon from "../../components/AddContactIcon";
import ContactCards from "../../components/ContactCards";
import HeaderBar from "../../components/HeaderBar";
import ContactList from "../../containers/ContactList";

const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <HeaderBar searchTerm={searchTerm} setSearchTerm={setSearchTerm } />
      <ContactList selectedGroup={selectedGroup} searchTerm={searchTerm} />
      <ContactCards setSelectedGroup={setSelectedGroup}/>
      <AddContactIcon />
    </>
  )

};

export default Home;
