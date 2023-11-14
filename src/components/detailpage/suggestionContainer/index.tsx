import { useRef } from "react";
import {
  sendToFriend,
  setSuggestionInput,
} from "../../../stores/movie/actions";
import { useSuggestionInput } from "../../../stores/movie/hooks";
import { useUser } from "../../../stores/user/hooks";
import { IoMdSend } from "react-icons/io";
import { toast } from "sonner";

const SuggestionsForm = ({ title }: { title: string }) => {
  const suggestionInput = useSuggestionInput();
  const user = useUser();
  const form = useRef();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form && suggestionInput !== "") {
      let formCurrent = e.target as HTMLFormElement;
      sendToFriend(formCurrent);
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <form
      ref={form.current}
      className="flex items-center justify-start gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="from_name"
        defaultValue={user.displayName !== "" ? user.displayName : user.email}
        readOnly
      />
      <input type="hidden" name="title" defaultValue={title} readOnly />
      <input
        type="email"
        name="reply_to"
        placeholder="Friend's email"
        value={suggestionInput}
        className="border-b-2 w-[260px] focus-within:border-m_yellow focus-within:text-m_yellow items-center py-1 placeholder:text-m_yellow bg-transparent outline-none px-2 focus:text-white focus:bg-transparent "
        onChange={(e) => setSuggestionInput(e.target.value)}
      />
      <button
        type="submit"
        className="w-[34px] h-[34px] rounded-md bg-m_yellow flex items-center justify-center"
      >
        <IoMdSend className="text-m_black" />
      </button>
    </form>
  );
};

export default SuggestionsForm;
