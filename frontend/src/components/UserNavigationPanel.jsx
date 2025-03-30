import { useContext } from "react";
import { UserContext } from "@/App";
import { LayoutDashboard, NotebookPenIcon, Settings, UserCircle2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { removeInSession } from "@/common/session";
import FadeContent from "@/animations/FadeContent/FadeContent";

const UserNavigationPanel = () => {
  const {
    userAuth: { username },
    setUserAuth,
  } = useContext(UserContext);

  const signOutUser = () => {
    removeInSession("user");
    setUserAuth({ access_token: null });
  };

  return (
    <FadeContent className='absolute right-0 z-50' transition={{ duration: 0.2 }}>
      <div className='bg-white absolute border right-0 border-gray-150 w-60 overflow-hidden duration-200 text-gray-700 font-thin'>
        <Link to='/editor' className='flex gap-2 md:hidden pl-8 py-4 items-center hover:bg-gray-50'>
          <NotebookPenIcon size={18} />
          <p>Write</p>
        </Link>

        <Link to={`/profile/${username}`} className='flex gap-2 md:hidden pl-8 py-4 items-center hover:bg-gray-50'>
          <UserCircle2Icon size={18} />
          <p>User Profile</p>
        </Link>
        <Link to='/dashboard/blogs' className='flex gap-2 md:hidden pl-8 py-4 items-center hover:bg-gray-50'>
          <LayoutDashboard size={18} />
          <p>Dashboard</p>
        </Link>
        <Link to='/settings/edit-profile' className='flex gap-2 md:hidden pl-8 py-4 items-center hover:bg-gray-50'>
          <Settings size={18} />
          <p>Settings</p>
        </Link>

        <span className='absolute border-t border-gray-100 w-[100%]'></span>

        <button className='text-left p-4 hover:bg-gray-50 w-full pl-8 py-4' onClick={signOutUser}>
          <h1 className='font-bold text-base'>Sign out</h1>
          <p className='text-tiny text-gray-400'>@{username}</p>
        </button>
      </div>
    </FadeContent>
  );
};

export default UserNavigationPanel;
