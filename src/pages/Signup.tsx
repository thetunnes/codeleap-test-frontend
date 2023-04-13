import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { useUserNameContext } from "../context/userNameContext";
import { Button } from "../components/Button";

export function Signup() {
  const navigate = useNavigate()
  const { userName, handleSaveUserName } = useUserNameContext();

  return (
    <form className="w-full max-w-lg font-sans flex flex-col items-stretch gap-6 bg-white p-6 rounded-2xl ">
      <h1 className="font-bold text-xl">Welcome to CodeLeap network!</h1>

      <Input
        value={userName?.username}
        onChange={({ target }) => handleSaveUserName(target.value)}
        id="username"
        label="Please enter your username"
        name="username"
        placeholder="John doe"
      />

      <Button
        disabled={!userName?.username}
        type="button"
        color="blue"
        onClick={() => navigate('/')}
      >
        ENTER
      </Button>
    </form>
  );
}
