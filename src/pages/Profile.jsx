import UserHeader from "../components/UserHeader";
import AccountCard from "../components/AccountCard";
import "../styles/profile.css";

const accounts = [
  { title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance" },
  { title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance" },
  { title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance" }
];

const Profile = () => {
  return (
    <main className="main bg-dark">
      <UserHeader />
      {accounts.map((account, index) => (
        <AccountCard key={index} title={account.title} amount={account.amount} description={account.description} />
      ))}
    </main>
  );
};

export default Profile;